import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribePatchGroupStateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribePatchGroupStateHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribePatchGroupStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
