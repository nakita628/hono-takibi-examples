import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DetectKeyPhrasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DetectKeyPhrasesHandler = app.openapi(
  postXAmzTargetComprehend20171127DetectKeyPhrasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
