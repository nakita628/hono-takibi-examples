import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribePatchBaselinesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribePatchBaselinesHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribePatchBaselinesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
