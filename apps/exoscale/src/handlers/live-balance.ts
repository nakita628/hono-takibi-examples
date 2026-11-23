import type { RouteHandler } from '@hono/zod-openapi'
import type { getLiveBalanceRoute } from '../routes'

export const getLiveBalanceRouteHandler: RouteHandler<typeof getLiveBalanceRoute> = async (c) => {
  throw new Error('Not implemented')
}
