import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListMailDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListMailDomainsHandler = app.openapi(
  postXAmzTargetWorkMailServiceListMailDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
