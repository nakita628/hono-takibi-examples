import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701DeleteParallelDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701DeleteParallelDataHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701DeleteParallelDataRoute,
  (c) => {},
)
