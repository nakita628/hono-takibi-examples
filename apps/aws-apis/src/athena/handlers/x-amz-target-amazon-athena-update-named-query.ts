import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateNamedQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaUpdateNamedQueryHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateNamedQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
