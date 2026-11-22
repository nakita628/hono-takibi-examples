import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMStartSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMStartSessionHandler = app.openapi(
  postXAmzTargetAmazonSSMStartSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
