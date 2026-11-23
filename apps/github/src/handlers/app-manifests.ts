import { OpenAPIHono } from '@hono/zod-openapi'
import { postAppManifestsCodeConversionsRoute } from '../routes'

const app = new OpenAPIHono()

export const appManifestsHandler = app.openapi(postAppManifestsCodeConversionsRoute, (c) => {
  throw new Error('Not implemented')
})
