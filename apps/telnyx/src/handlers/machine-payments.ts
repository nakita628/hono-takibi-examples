import type { RouteHandler } from '@hono/zod-openapi'
import type { postMachinePaymentsAccountCreditRoute } from '../routes'

export const postMachinePaymentsAccountCreditRouteHandler: RouteHandler<
  typeof postMachinePaymentsAccountCreditRoute
> = async (c) => {
  throw new Error('Not implemented')
}
