import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListMailDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListMailDomainsHandler = app.openapi(
  postXAmzTargetWorkMailServiceListMailDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
