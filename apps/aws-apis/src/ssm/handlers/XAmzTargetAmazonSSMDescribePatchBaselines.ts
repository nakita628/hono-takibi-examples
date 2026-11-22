import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribePatchBaselinesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribePatchBaselinesHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribePatchBaselinesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
