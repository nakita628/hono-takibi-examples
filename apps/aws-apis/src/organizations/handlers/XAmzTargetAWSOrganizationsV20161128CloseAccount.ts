import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128CloseAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128CloseAccountHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128CloseAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
