import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05HealthInformationHipRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const dataFlowHandler = app.openapi(postV05HealthInformationHipRequestRoute, (c) => {
  throw new Error('Not implemented')
})
