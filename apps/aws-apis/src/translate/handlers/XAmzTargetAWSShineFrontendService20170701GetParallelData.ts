import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701GetParallelDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701GetParallelDataHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701GetParallelDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
