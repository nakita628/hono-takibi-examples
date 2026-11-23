import { OpenAPIHono } from '@hono/zod-openapi'
import { getEnvImpactPeriodRoute } from '../routes'

const app = new OpenAPIHono()

export const envImpactHandler = app.openapi(getEnvImpactPeriodRoute, (c) => {
  throw new Error('Not implemented')
})
