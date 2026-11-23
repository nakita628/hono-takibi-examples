import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchV1FieldsRoute, getSearchV1OrganicRoute, getSearchV1ScrapeRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchV1FieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchV1OrganicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchV1ScrapeRoute, (c) => {
    throw new Error('Not implemented')
  })
