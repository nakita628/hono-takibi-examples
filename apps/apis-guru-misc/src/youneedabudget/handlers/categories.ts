import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBudgetsBudgetIdCategoriesCategoryIdRoute,
  getBudgetsBudgetIdCategoriesRoute,
  getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute,
  patchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getBudgetsBudgetIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
