import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCopyImageRoute, postActionCopyImageRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCopyImageHandler = app
  .openapi(getActionCopyImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCopyImageRoute, (c) => {
    throw new Error('Not implemented')
  })
