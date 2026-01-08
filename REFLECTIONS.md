## How the assignment was solved

- Initialized the project using **React + Vite** for fast development and minimal configuration.
- Analyzed the **Figma design** and decomposed it into logical, reusable React components.
- Implemented the UI using dummy data to decouple layout and interaction from API concerns.
- Implemented a responsive layout supporting both mobile and desktop variants.
- Integrated the provided API to populate the application with real data.

## Improvements

### API & Data Layer

- Separate the query layer from domain-level data aggregation to clearly distinguish
  between raw API data and composed domain models.
    - Expose smaller, reusable queries (e.g. open status, filters, price ranges) instead of aggregating everything into large objects (`EnrichedRestaurant`). 
    - This would reduce unnecessary refetching, improve caching granularity, and make the data layer more flexible.
    - This approach scales better as application complexity grows and enables more targeted invalidation and reuse across views.

- Use *React Query* features such as query invalidation and `staleTime` to avoid stale data if the data was subject to change.

- The frontend currently relies directly on API response models.
  Introducing a clear separation between API DTOs and frontend domain models
  (e.g. `RestaurantDTO` → `Restaurant`) would reduce coupling to backend changes.

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


