import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteWarmPoolRoute, postActionDeleteWarmPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteWarmPoolHandler = app
  .openapi(getActionDeleteWarmPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteWarmPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
