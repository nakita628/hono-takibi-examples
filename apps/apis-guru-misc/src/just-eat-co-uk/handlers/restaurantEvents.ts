import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1TenantRestaurantsEventOfflineRoute,
  deleteV1TenantRestaurantsIdEventOfflineRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restaurantEventsHandler = app
  .openapi(postV1TenantRestaurantsEventOfflineRoute, (c) => {})
  .openapi(deleteV1TenantRestaurantsIdEventOfflineRoute, (c) => {})
