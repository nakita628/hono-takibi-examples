import { OpenAPIHono } from '@hono/zod-openapi'
import { getEngineManifestRoute } from '../routes'

const app = new OpenAPIHono()

export const engineManifestHandler = app.openapi(getEngineManifestRoute, (c) => {
  throw new Error('Not implemented')
})
