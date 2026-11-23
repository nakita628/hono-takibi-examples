import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetNamedQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetNamedQueryHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetNamedQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
