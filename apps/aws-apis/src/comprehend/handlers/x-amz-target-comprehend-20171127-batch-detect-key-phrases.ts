import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127BatchDetectKeyPhrasesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127BatchDetectKeyPhrasesHandler = app.openapi(
  postXAmzTargetComprehend20171127BatchDetectKeyPhrasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
