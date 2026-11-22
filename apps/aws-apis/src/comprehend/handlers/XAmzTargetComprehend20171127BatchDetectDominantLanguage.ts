import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127BatchDetectDominantLanguageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127BatchDetectDominantLanguageHandler = app.openapi(
  postXAmzTargetComprehend20171127BatchDetectDominantLanguageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
