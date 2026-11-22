import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutWarmPoolRoute, postActionPutWarmPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionPutWarmPoolHandler = app
  .openapi(getActionPutWarmPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutWarmPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
