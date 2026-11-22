import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128MoveAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128MoveAccountHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128MoveAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
