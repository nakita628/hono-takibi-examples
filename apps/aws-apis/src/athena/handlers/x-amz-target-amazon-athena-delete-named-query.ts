import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaDeleteNamedQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaDeleteNamedQueryHandler = app.openapi(
  postXAmzTargetAmazonAthenaDeleteNamedQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
