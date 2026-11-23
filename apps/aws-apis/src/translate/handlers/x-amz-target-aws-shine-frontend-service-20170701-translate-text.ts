import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701TranslateTextRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShineFrontendService20170701TranslateTextHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701TranslateTextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
