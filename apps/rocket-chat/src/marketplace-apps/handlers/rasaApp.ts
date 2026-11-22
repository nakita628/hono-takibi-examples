import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiAppsPublicAppIdIncomingRoute } from '../routes'

const app = new OpenAPIHono()

export const rasaAppHandler = app.openapi(postApiAppsPublicAppIdIncomingRoute, (c) => {
  throw new Error('Not implemented')
})
