import { OpenAPIHono } from '@hono/zod-openapi'
import { getLibrariesAvailableOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const librariesHandler = app.openapi(getLibrariesAvailableOptionsRoute, (c) => {
  throw new Error('Not implemented')
})
