import { OpenAPIHono } from '@hono/zod-openapi'
import { getFiltersEndpointRoute, getFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const filtersHandler = app
  .openapi(getFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiltersEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
