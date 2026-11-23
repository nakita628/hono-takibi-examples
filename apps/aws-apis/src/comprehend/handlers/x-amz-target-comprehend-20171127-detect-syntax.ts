import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DetectSyntaxRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DetectSyntaxHandler = app.openapi(
  postXAmzTargetComprehend20171127DetectSyntaxRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
