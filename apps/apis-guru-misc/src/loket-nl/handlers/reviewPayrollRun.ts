import { OpenAPIHono } from '@hono/zod-openapi'
import { patchProvidersEmployersPayrolladministrationsPayrollrunsRoute } from '../routes'

const app = new OpenAPIHono()

export const reviewPayrollRunHandler = app.openapi(
  patchProvidersEmployersPayrolladministrationsPayrollrunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
