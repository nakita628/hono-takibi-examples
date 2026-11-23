import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DeleteDomainHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
