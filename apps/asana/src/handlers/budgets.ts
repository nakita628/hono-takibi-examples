import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBudgetsBudgetGidRoute,
  getBudgetsBudgetGidRoute,
  getBudgetsRoute,
  postBudgetsRoute,
  putBudgetsBudgetGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const budgetsHandler = app
  .openapi(getBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBudgetsBudgetGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBudgetsBudgetGidRoute, (c) => {
    throw new Error('Not implemented')
  })
