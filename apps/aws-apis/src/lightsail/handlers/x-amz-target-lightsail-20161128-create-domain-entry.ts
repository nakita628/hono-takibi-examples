import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateDomainEntryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateDomainEntryHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateDomainEntryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
