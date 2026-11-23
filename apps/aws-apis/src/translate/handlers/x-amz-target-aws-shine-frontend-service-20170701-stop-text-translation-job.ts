import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701StopTextTranslationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShineFrontendService20170701StopTextTranslationJobHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701StopTextTranslationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
