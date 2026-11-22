import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersEmployerIdDashboardRoute } from '../routes'

const app = new OpenAPIHono()

export const employerDashboardHandler = app.openapi(
  getProvidersEmployersEmployerIdDashboardRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
