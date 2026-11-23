import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3DecreaseReplicationFactorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3DecreaseReplicationFactorHandler = app.openapi(
  postXAmzTargetAmazonDAXV3DecreaseReplicationFactorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
