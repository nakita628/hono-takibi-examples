import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701ListLanguagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701ListLanguagesHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701ListLanguagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
