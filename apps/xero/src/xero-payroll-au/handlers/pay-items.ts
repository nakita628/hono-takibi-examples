import { OpenAPIHono } from '@hono/zod-openapi'
import { getPayItemsRoute, postPayItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const payItemsHandler = app
  .openapi(getPayItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
