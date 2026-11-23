import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1RenderSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(postV1RenderSyncRoute, (c) => {
  throw new Error('Not implemented')
})
