import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128DeleteOrganizationalUnitHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
