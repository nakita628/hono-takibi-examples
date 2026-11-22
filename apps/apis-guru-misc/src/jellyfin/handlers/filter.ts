import { OpenAPIHono } from '@hono/zod-openapi'
import { getItemsFilters2Route, getItemsFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const filterHandler = app
  .openapi(getItemsFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsFilters2Route, (c) => {
    throw new Error('Not implemented')
  })
