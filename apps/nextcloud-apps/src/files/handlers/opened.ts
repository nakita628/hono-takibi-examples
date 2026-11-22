import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcsV2PhpAppsFilesApiV1OpenedRoute } from '../routes'

const app = new OpenAPIHono()

export const openedHandler = app.openapi(postOcsV2PhpAppsFilesApiV1OpenedRoute, (c) => {
  throw new Error('Not implemented')
})
