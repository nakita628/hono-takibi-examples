import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDescribeOrganizationHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
