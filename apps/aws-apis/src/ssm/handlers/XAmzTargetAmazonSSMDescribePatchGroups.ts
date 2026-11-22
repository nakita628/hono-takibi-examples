import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribePatchGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribePatchGroupsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribePatchGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
