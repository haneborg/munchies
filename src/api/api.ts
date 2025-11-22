const BASE_URL = "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api";

export interface Restaurant {
    id: string;
    name: string;
    rating: number;
    filter_ids: string[];
    image_url: string;
    delivery_time_minutes: number;
    price_range_id: string;
}

export interface FilterItem {
    id: string;
    name: string;
    image_url: string;
}

export interface PriceRange {
    id: string;
    range: string;
}

export interface RestaurantOpenStatus {
    restaurant_id: string;
    is_open: boolean;
}

async function GET<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`);

    if (!res.ok) {
        throw new Error(`API error: ${res.status} – ${res.statusText}`);
    }

    return res.json() as Promise<T>;
}

export async function getRestaurants(): Promise<{ restaurants: Restaurant[] }> {
    return GET<{ restaurants: Restaurant[] }>("/restaurants");
}

export async function getRestaurant(id: string): Promise<Restaurant> {
    return GET<Restaurant>(`/restaurants/${id}`);
}

export async function getFilters(): Promise<{ filters: FilterItem[] }> {
    return GET<{ filters: FilterItem[] }>("/filter");
}

export async function getFilter(id: string): Promise<FilterItem> {
    return GET<FilterItem>(`/filter/${id}`);
}

export async function getRestaurantOpenStatus(id: string): Promise<RestaurantOpenStatus> {
    return GET<RestaurantOpenStatus>(`/open/${id}`);
}

export async function getPriceRange(id: string): Promise<PriceRange> {
    return GET<PriceRange>(`/price-range/${id}`);
}
