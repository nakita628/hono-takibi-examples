import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectoryObjectsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryObjectsHandler = app.openapi(getDirectoryObjectsCountRoute, (c) => {
  throw new Error('Not implemented')
})
