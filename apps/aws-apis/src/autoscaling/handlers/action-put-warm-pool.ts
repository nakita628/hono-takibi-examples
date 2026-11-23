import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutWarmPoolRoute, postActionPutWarmPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPutWarmPoolHandler = app
  .openapi(getActionPutWarmPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutWarmPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
