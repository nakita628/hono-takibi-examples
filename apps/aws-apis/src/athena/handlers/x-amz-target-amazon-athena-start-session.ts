import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaStartSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaStartSessionHandler = app.openapi(
  postXAmzTargetAmazonAthenaStartSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
