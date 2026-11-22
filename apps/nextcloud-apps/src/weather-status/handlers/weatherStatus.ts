import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsWeatherStatusApiV1FavoritesRoute,
  getOcsV2PhpAppsWeatherStatusApiV1ForecastRoute,
  getOcsV2PhpAppsWeatherStatusApiV1LocationRoute,
  putOcsV2PhpAppsWeatherStatusApiV1FavoritesRoute,
  putOcsV2PhpAppsWeatherStatusApiV1LocationRoute,
  putOcsV2PhpAppsWeatherStatusApiV1ModeRoute,
  putOcsV2PhpAppsWeatherStatusApiV1UsePersonalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const weatherStatusHandler = app
  .openapi(putOcsV2PhpAppsWeatherStatusApiV1ModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsWeatherStatusApiV1UsePersonalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsWeatherStatusApiV1LocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsWeatherStatusApiV1LocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsWeatherStatusApiV1ForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsWeatherStatusApiV1FavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsWeatherStatusApiV1FavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
