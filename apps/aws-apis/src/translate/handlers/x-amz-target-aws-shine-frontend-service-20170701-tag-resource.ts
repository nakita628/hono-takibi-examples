import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShineFrontendService20170701TagResourceHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
