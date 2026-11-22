import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701DeleteTerminologyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701DeleteTerminologyHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701DeleteTerminologyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
