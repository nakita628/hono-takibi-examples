import { OpenAPIHono } from '@hono/zod-openapi'
import { postProvidersEmployersEmployerIdLeaveRoute } from '../routes'

const app = new OpenAPIHono()

export const collectiveLeaveHandler = app.openapi(
  postProvidersEmployersEmployerIdLeaveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
