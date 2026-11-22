import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteDomainEntryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteDomainEntryHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteDomainEntryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
