import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128RegisterDelegatedAdministratorHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
