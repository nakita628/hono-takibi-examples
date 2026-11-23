import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101AssociateAdminAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101AssociateAdminAccountHandler = app.openapi(
  postXAmzTargetAWSFMS20180101AssociateAdminAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
