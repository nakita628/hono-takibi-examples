import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701CreateParallelDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701CreateParallelDataHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701CreateParallelDataRoute,
  (c) => {},
)
