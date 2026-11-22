import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218GetHostnameSuggestionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218GetHostnameSuggestionHandler = app.openapi(
  postXAmzTargetOpsWorks20130218GetHostnameSuggestionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
