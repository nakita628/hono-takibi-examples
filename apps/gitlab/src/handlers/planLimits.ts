import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4ApplicationPlanLimitsRoute, putApiV4ApplicationPlanLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const planLimitsHandler = app
  .openapi(getApiV4ApplicationPlanLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ApplicationPlanLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
