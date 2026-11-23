import type { RouteHandler } from '@hono/zod-openapi'
import type { getAlertmanagersRoute } from '../routes'

export const getAlertmanagersRouteHandler: RouteHandler<typeof getAlertmanagersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
