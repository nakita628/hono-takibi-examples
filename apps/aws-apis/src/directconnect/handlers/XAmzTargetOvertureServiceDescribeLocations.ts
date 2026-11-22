import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeLocationsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeLocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
