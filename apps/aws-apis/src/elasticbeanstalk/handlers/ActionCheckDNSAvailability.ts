import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCheckDNSAvailabilityRoute, postActionCheckDNSAvailabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCheckDNSAvailabilityHandler = app
  .openapi(getActionCheckDNSAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCheckDNSAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
