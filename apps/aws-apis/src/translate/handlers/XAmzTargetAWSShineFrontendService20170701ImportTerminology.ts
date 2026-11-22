import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701ImportTerminologyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701ImportTerminologyHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701ImportTerminologyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
