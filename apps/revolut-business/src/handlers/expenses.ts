import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getExpensesExpenseIdReceiptsReceiptIdContentRoute,
  getExpensesExpenseIdRoute,
  getExpensesRoute,
} from '../routes'

export const getExpensesRouteHandler: RouteHandler<typeof getExpensesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getExpensesExpenseIdRouteHandler: RouteHandler<
  typeof getExpensesExpenseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExpensesExpenseIdReceiptsReceiptIdContentRouteHandler: RouteHandler<
  typeof getExpensesExpenseIdReceiptsReceiptIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
