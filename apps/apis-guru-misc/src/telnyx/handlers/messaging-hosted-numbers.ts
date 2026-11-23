import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteMessagingHostedNumbersIdRoute } from '../routes'

export const deleteMessagingHostedNumbersIdRouteHandler: RouteHandler<
  typeof deleteMessagingHostedNumbersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
