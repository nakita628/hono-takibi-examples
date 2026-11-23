import type { RouteHandler } from '@hono/zod-openapi'
import type { getLiasettingsPosdataprovidersRoute, postLiasettingsBatchRoute } from '../routes'

export const postLiasettingsBatchRouteHandler: RouteHandler<
  typeof postLiasettingsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLiasettingsPosdataprovidersRouteHandler: RouteHandler<
  typeof getLiasettingsPosdataprovidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
