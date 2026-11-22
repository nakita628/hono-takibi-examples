import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128CreateOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128CreateOrganizationHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128CreateOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
