import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101DeleteProtocolsListRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101DeleteProtocolsListHandler = app.openapi(
  postXAmzTargetAWSFMS20180101DeleteProtocolsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
