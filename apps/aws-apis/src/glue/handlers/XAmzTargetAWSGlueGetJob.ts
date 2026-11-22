import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetJobHandler = app.openapi(postXAmzTargetAWSGlueGetJobRoute, (c) => {
  throw new Error('Not implemented')
})
