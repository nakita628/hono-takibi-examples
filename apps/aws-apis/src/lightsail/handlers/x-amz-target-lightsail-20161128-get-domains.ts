import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetDomainsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
