import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3DiskspaceRoute } from '../routes'

const app = new OpenAPIHono()

export const diskSpaceHandler = app.openapi(getApiV3DiskspaceRoute, (c) => {
  throw new Error('Not implemented')
})
