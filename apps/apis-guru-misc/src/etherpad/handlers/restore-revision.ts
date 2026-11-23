import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestoreRevisionRoute, postRestoreRevisionRoute } from '../routes'

const app = new OpenAPIHono()

export const restoreRevisionHandler = app
  .openapi(getRestoreRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestoreRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
