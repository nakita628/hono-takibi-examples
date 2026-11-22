import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListProtocolsListsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101ListProtocolsListsHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListProtocolsListsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
