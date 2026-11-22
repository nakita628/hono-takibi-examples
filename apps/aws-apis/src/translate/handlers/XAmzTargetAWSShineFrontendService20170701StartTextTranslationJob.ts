import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701StartTextTranslationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701StartTextTranslationJobHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701StartTextTranslationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
