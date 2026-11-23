import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreateNamedQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaCreateNamedQueryHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreateNamedQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
