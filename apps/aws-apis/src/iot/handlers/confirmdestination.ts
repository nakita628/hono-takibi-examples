import type { RouteHandler } from '@hono/zod-openapi'
import type { getConfirmdestinationConfirmationTokenRoute } from '../routes'

export const getConfirmdestinationConfirmationTokenRouteHandler: RouteHandler<
  typeof getConfirmdestinationConfirmationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
