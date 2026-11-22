import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
