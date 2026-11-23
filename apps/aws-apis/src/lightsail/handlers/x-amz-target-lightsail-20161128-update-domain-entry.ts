import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UpdateDomainEntryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128UpdateDomainEntryHandler = app.openapi(
  postXAmzTargetLightsail20161128UpdateDomainEntryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
