import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101PutProtocolsListRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101PutProtocolsListHandler = app.openapi(
  postXAmzTargetAWSFMS20180101PutProtocolsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
