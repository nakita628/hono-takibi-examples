import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShineFrontendService20170701ListTextTranslationJobsHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
