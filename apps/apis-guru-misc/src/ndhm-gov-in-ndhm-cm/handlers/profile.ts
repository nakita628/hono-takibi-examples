import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05PatientsProfileOnShareRoute } from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app.openapi(postV05PatientsProfileOnShareRoute, (c) => {
  throw new Error('Not implemented')
})
