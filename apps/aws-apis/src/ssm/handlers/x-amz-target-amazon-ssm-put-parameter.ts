import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMPutParameterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmPutParameterHandler = app.openapi(
  postXAmzTargetAmazonSSMPutParameterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
