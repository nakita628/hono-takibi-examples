import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteParameterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeleteParameterHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteParameterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
