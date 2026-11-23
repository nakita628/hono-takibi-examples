import { OpenAPIHono } from '@hono/zod-openapi'
import { getSafetyAlertsIdRoute, getSafetyCasesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const safetyHandler = app
  .openapi(getSafetyCasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSafetyAlertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
