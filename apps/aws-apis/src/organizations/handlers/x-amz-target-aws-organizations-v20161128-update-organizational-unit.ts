import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128UpdateOrganizationalUnitHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
