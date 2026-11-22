import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701GetTerminologyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701GetTerminologyHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701GetTerminologyRoute,
  (c) => {},
)
