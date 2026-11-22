import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701UpdateParallelDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701UpdateParallelDataHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701UpdateParallelDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
