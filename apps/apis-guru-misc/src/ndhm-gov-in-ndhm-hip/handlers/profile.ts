import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05PatientsProfileShareRoute } from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app.openapi(postV05PatientsProfileShareRoute, (c) => {
  throw new Error('Not implemented')
})
