import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetProtocolsListRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101GetProtocolsListHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetProtocolsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
