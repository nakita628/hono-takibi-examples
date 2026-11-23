import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListResourceSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101ListResourceSetsHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListResourceSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
