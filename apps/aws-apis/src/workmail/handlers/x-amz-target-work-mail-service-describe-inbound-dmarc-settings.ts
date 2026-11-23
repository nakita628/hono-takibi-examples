import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeInboundDmarcSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDescribeInboundDmarcSettingsHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeInboundDmarcSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
