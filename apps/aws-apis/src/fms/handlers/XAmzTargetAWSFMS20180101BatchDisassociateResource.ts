import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101BatchDisassociateResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101BatchDisassociateResourceHandler = app.openapi(
  postXAmzTargetAWSFMS20180101BatchDisassociateResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
