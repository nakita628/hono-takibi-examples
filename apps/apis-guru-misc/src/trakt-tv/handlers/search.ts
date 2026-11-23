import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchIdTypeIdRoute, getSearchTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
