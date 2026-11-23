import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsWeatherStatusApiV1FavoritesRoute,
  getOcsV2PhpAppsWeatherStatusApiV1ForecastRoute,
  getOcsV2PhpAppsWeatherStatusApiV1LocationRoute,
  putOcsV2PhpAppsWeatherStatusApiV1FavoritesRoute,
  putOcsV2PhpAppsWeatherStatusApiV1LocationRoute,
  putOcsV2PhpAppsWeatherStatusApiV1ModeRoute,
  putOcsV2PhpAppsWeatherStatusApiV1UsePersonalRoute,
} from './routes'
import {
  getOcsV2PhpAppsWeatherStatusApiV1FavoritesRouteHandler,
  getOcsV2PhpAppsWeatherStatusApiV1ForecastRouteHandler,
  getOcsV2PhpAppsWeatherStatusApiV1LocationRouteHandler,
  putOcsV2PhpAppsWeatherStatusApiV1FavoritesRouteHandler,
  putOcsV2PhpAppsWeatherStatusApiV1LocationRouteHandler,
  putOcsV2PhpAppsWeatherStatusApiV1ModeRouteHandler,
  putOcsV2PhpAppsWeatherStatusApiV1UsePersonalRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    putOcsV2PhpAppsWeatherStatusApiV1ModeRoute,
    putOcsV2PhpAppsWeatherStatusApiV1ModeRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsWeatherStatusApiV1UsePersonalRoute,
    putOcsV2PhpAppsWeatherStatusApiV1UsePersonalRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsWeatherStatusApiV1LocationRoute,
    getOcsV2PhpAppsWeatherStatusApiV1LocationRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsWeatherStatusApiV1LocationRoute,
    putOcsV2PhpAppsWeatherStatusApiV1LocationRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsWeatherStatusApiV1ForecastRoute,
    getOcsV2PhpAppsWeatherStatusApiV1ForecastRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsWeatherStatusApiV1FavoritesRoute,
    getOcsV2PhpAppsWeatherStatusApiV1FavoritesRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsWeatherStatusApiV1FavoritesRoute,
    putOcsV2PhpAppsWeatherStatusApiV1FavoritesRouteHandler,
  )

export default app
