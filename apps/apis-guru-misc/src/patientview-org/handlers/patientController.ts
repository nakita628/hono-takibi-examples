import { OpenAPIHono } from '@hono/zod-openapi'
import { getPatientUserIdBasicRoute } from '../routes'

const app = new OpenAPIHono()

export const patientControllerHandler = app.openapi(getPatientUserIdBasicRoute, (c) => {
  throw new Error('Not implemented')
})
