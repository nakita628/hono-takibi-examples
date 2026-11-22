import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBudgetsBudgetIdPayeeLocationsPayeeLocationIdRoute,
  getBudgetsBudgetIdPayeeLocationsRoute,
  getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payeeLocationsHandler = app
  .openapi(getBudgetsBudgetIdPayeeLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdPayeeLocationsPayeeLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
