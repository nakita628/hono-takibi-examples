import { OpenAPIHono } from '@hono/zod-openapi'
import { postProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdUndoRoute } from '../routes'

const app = new OpenAPIHono()

export const undoPayrollRunHandler = app.openapi(
  postProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdUndoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
