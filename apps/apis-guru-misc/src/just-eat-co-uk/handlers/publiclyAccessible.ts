import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestaurantsTenantRestaurantIdOrdertimesRoute,
  putRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publiclyAccessibleHandler = app
  .openapi(getRestaurantsTenantRestaurantIdOrdertimesRoute, (c) => {})
  .openapi(putRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeRoute, (c) => {})
