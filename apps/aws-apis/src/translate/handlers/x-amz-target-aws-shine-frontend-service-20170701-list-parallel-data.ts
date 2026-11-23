import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701ListParallelDataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShineFrontendService20170701ListParallelDataHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701ListParallelDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
