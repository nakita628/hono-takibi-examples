import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateDomainHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
