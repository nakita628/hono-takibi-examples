import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2MonitoredResourceDescriptorsRoute } from '../routes'

const app = new OpenAPIHono()

export const monitoredResourceDescriptorsHandler = app.openapi(
  getV2MonitoredResourceDescriptorsRoute,
  (c) => {},
)
