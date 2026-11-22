import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05PatientsOnFindRoute } from '../routes'

const app = new OpenAPIHono()

export const identificationHandler = app.openapi(postV05PatientsOnFindRoute, (c) => {
  throw new Error('Not implemented')
})
