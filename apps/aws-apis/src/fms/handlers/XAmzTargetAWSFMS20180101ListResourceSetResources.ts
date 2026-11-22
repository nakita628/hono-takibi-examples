import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListResourceSetResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101ListResourceSetResourcesHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListResourceSetResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
