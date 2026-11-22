import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListCommandsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMListCommandsHandler = app.openapi(
  postXAmzTargetAmazonSSMListCommandsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
