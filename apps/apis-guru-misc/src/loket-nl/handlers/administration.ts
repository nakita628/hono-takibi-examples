import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersEmployerIdAdministrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const administrationHandler = app.openapi(
  getProvidersEmployersEmployerIdAdministrationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
