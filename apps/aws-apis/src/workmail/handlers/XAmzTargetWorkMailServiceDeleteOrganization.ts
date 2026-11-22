import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeleteOrganizationHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
