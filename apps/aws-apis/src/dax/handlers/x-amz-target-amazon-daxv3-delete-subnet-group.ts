import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3DeleteSubnetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3DeleteSubnetGroupHandler = app.openapi(
  postXAmzTargetAmazonDAXV3DeleteSubnetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
