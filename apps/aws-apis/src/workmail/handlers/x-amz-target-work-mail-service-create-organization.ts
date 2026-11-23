import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceCreateOrganizationHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
