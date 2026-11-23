import type { RouteHandler } from '@hono/zod-openapi'
import type { getErrorCodesRoute } from '../routes'

export const getErrorCodesRouteHandler: RouteHandler<typeof getErrorCodesRoute> = async (c) => {
  throw new Error('Not implemented')
}
