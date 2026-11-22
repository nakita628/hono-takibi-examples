import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV4ProjectsIdSecurityScansSastSastEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const securityScansHandler = app.openapi(
  postApiV4ProjectsIdSecurityScansSastSastEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
