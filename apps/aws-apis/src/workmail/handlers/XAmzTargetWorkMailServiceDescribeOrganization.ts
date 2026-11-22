import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDescribeOrganizationHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
