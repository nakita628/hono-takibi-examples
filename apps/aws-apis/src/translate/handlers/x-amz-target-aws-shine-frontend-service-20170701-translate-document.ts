import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701TranslateDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShineFrontendService20170701TranslateDocumentHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701TranslateDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
