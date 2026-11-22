import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetDomainHandler = app.openapi(
  postXAmzTargetLightsail20161128GetDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
