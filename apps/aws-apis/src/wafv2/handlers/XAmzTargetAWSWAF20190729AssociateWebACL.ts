import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729AssociateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729AssociateWebACLHandler = app.openapi(
  postXAmzTargetAWSWAF20190729AssociateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
