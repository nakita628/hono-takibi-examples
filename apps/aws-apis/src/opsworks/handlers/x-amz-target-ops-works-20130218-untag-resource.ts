import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218UntagResourceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
