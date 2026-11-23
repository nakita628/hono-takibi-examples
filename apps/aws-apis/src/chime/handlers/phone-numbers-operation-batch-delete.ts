import type { RouteHandler } from '@hono/zod-openapi'
import type { postPhoneNumbersOperationBatchDeleteRoute } from '../routes'

export const postPhoneNumbersOperationBatchDeleteRouteHandler: RouteHandler<
  typeof postPhoneNumbersOperationBatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
