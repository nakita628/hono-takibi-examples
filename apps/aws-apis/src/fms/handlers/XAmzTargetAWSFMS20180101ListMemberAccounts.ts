import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListMemberAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101ListMemberAccountsHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListMemberAccountsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
