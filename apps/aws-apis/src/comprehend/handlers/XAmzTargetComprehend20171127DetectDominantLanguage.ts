import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DetectDominantLanguageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DetectDominantLanguageHandler = app.openapi(
  postXAmzTargetComprehend20171127DetectDominantLanguageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
