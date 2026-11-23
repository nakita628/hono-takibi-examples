import type { RouteHandler } from '@hono/zod-openapi'
import type { postPhoneNumbersOperationBatchUpdateRoute } from '../routes'

export const postPhoneNumbersOperationBatchUpdateRouteHandler: RouteHandler<
  typeof postPhoneNumbersOperationBatchUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
