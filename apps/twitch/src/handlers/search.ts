import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchCategoriesRoute, getSearchChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
