import { OpenAPIHono } from '@hono/zod-openapi'
import { getFiltersCreateRoute, getFiltersFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const filtersHandler = app
  .openapi(getFiltersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiltersFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
