import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05PatientsFindRoute, postV05PatientsOnFindRoute } from '../routes'

const app = new OpenAPIHono()

export const identificationHandler = app
  .openapi(postV05PatientsFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05PatientsOnFindRoute, (c) => {
    throw new Error('Not implemented')
  })
