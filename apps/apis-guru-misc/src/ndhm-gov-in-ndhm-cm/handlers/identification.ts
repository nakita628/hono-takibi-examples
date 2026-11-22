import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05PatientsFindRoute } from '../routes'

const app = new OpenAPIHono()

export const identificationHandler = app.openapi(postV05PatientsFindRoute, (c) => {
  throw new Error('Not implemented')
})
