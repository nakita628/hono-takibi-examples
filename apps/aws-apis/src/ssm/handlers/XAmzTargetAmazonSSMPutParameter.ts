import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMPutParameterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMPutParameterHandler = app.openapi(
  postXAmzTargetAmazonSSMPutParameterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
