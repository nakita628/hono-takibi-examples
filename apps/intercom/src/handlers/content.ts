import { OpenAPIHono } from '@hono/zod-openapi'
import { getContentSearchRoute, postContentBulkActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const contentHandler = app
  .openapi(postContentBulkActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
