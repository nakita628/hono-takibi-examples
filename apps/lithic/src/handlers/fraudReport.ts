import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1FraudTransactionsTransactionTokenRoute,
  postV1FraudTransactionsTransactionTokenRoute,
} from '../routes'

export const getV1FraudTransactionsTransactionTokenRouteHandler: RouteHandler<
  typeof getV1FraudTransactionsTransactionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FraudTransactionsTransactionTokenRouteHandler: RouteHandler<
  typeof postV1FraudTransactionsTransactionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
