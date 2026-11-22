import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701UntagResourceHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
