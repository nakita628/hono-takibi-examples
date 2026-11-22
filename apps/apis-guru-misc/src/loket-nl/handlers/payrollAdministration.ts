import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersEmployerIdPayrolladministrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const payrollAdministrationHandler = app.openapi(
  getProvidersEmployersEmployerIdPayrolladministrationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
