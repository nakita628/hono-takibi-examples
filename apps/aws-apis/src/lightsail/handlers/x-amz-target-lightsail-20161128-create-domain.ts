import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateDomainHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
