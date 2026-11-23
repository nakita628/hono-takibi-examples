import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DisableAwsServiceAccessHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
