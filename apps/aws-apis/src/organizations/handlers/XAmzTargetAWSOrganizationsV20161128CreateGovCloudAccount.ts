import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
