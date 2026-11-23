import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3RebootNodeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3RebootNodeHandler = app.openapi(
  postXAmzTargetAmazonDAXV3RebootNodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
