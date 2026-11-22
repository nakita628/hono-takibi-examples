import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101DisassociateAdminAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101DisassociateAdminAccountHandler = app.openapi(
  postXAmzTargetAWSFMS20180101DisassociateAdminAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
