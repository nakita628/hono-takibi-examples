import type { RouteHandler } from '@hono/zod-openapi'
import type { putComboRoute } from '../routes'

export const putComboRouteHandler: RouteHandler<typeof putComboRoute> = async (c) => {
  throw new Error('Not implemented')
}
