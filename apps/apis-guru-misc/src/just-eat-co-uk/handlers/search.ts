import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchAutocompleteTenantRoute, getSearchRestaurantsTenantRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchAutocompleteTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRestaurantsTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
