import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DeregisterDelegatedAdministratorHandler =
  app.openapi(postXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorRoute, (c) => {
    throw new Error('Not implemented')
  })
