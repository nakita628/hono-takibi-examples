import { OpenAPIHono } from '@hono/zod-openapi'
import { postShuttlePathMappingImportsRoute } from '../routes'

const app = new OpenAPIHono()

export const shuttlePathMappingImportsHandler = app.openapi(
  postShuttlePathMappingImportsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
