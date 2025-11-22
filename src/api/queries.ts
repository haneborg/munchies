import { useQuery } from "@tanstack/react-query";
import {
    getRestaurants,
    getFilters,
    type Restaurant,
    getRestaurantOpenStatus,
    getFilter,
    type FilterItem,
    type RestaurantOpenStatus,
    type PriceRange,
    getPriceRange
} from "./api";

export interface EnrichedRestaurant {
    restaurant: Restaurant;
    open_status: RestaurantOpenStatus;
    filters: FilterItem[];
    price_range: PriceRange;
}

export interface SelectableFilterItem {
    filter: FilterItem;
    selected: boolean;
}

export function useRestaurants() {
    return useQuery<EnrichedRestaurant[]>({
        queryKey: ["restaurants"],
        queryFn: async () => {
            const data = await getRestaurants();
            const restaurants = data.restaurants;

            const enriched = await Promise.all(
                restaurants.map(async (restaurant) => {
                    const [openStatus, filters, priceRange] = await Promise.all([
                        getRestaurantOpenStatus(restaurant.id),
                        Promise.all(restaurant.filter_ids.map((filterId) => getFilter(filterId))),
                        getPriceRange(restaurant.price_range_id)
                    ]);

                    const complete: EnrichedRestaurant = {
                        restaurant,
                        open_status: openStatus,
                        filters: filters,
                        price_range: priceRange
                    };

                    return complete;
                })
            );

            return enriched;
        },
    });
}

export function useFilters() {
    return useQuery<SelectableFilterItem[]>({
        queryKey: ["filters"],
        queryFn: async () => {
            const data = await getFilters();
            return data.filters.map(filter => ({
                filter,
                selected: false
            }));
        }
    });
}