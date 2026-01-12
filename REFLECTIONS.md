## How the assignment was solved

1. Initialized the project using **React + Vite** for fast development and minimal configuration.
2. Analyzed the **Figma design** and decomposed it into logical, reusable React components.
3. Implemented the UI using dummy data to decouple layout and API. 
4. Updated the UI to have a responsive layout supporting both mobile and desktop variants.
5. Integrated the provided API to populate the application with real data.

## Improvements

### API & Data Layer

- Separate the query layer from domain-level data aggregation to clearly distinguish
  between raw API data and composed domain models.
    - Expose smaller, reusable queries (e.g. open status, filters, price ranges) instead of aggregating everything into large objects (`EnrichedRestaurant`). 
    - This would reduce unnecessary refetching, improve caching granularity, and make the data layer more flexible.
    - This approach scales better as application complexity grows and enables more targeted invalidation and reuse across views.


```js
  export function useRestaurants() {
    return useQuery({
      queryKey: ["restaurants"],
      queryFn: getRestaurants,
    });
  }
```
  

- Use *React Query* features such as query invalidation to avoid stale data if the data was subject to change (e.g. `RestaurantOpenStatus`) 

- Introducing a clear separation between API DTOs and frontend domain models. Would reduce coupling to backend changes.

``` js
  export interface FilterItemDTO {
    id: string;
    name: string;
    image_url: string;
  }
```
``` js
  export interface FilterItem {
    id: string;
    name: string;
    image_url: string;
    selected: boolean;
  }
```


### Styling & Responsiveness

- CSS could be simplified by reducing duplication and extracting shared styles
  for visually similar components such as cards and buttons.

- Responsiveness could be handled more systematically using clearer breakpoint
  strategies and layout-driven CSS (`flex/grid`). 

## Challenges & Learnings

- Working directly from Figma was new to me. E.g., translating spacing,
  typography, and responsive variants into code, but it improved my understanding
  of designer–developer workflows.

- Designing a responsive layout for both mobile and desktop highlighted the importance of planning for responsive design early and relying more on flexible layout systems.


