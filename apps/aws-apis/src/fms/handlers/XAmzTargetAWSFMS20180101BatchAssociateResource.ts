import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101BatchAssociateResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101BatchAssociateResourceHandler = app.openapi(
  postXAmzTargetAWSFMS20180101BatchAssociateResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
