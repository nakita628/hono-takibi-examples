import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
