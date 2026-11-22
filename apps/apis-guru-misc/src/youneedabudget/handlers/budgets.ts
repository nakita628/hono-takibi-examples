import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBudgetsBudgetIdRoute,
  getBudgetsBudgetIdSettingsRoute,
  getBudgetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const budgetsHandler = app
  .openapi(getBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
