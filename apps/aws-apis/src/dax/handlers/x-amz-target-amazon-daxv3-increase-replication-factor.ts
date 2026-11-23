import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3IncreaseReplicationFactorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3IncreaseReplicationFactorHandler = app.openapi(
  postXAmzTargetAmazonDAXV3IncreaseReplicationFactorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
