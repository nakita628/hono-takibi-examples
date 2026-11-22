import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1DiskspaceRoute } from '../routes'

const app = new OpenAPIHono()

export const diskSpaceHandler = app.openapi(getApiV1DiskspaceRoute, (c) => {
  throw new Error('Not implemented')
})
