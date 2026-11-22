import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribePatchPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribePatchPropertiesHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribePatchPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
