import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127BatchDetectSyntaxRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127BatchDetectSyntaxHandler = app.openapi(
  postXAmzTargetComprehend20171127BatchDetectSyntaxRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
