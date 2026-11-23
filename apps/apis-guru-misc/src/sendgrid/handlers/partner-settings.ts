import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPartnerSettingsNewRelicRoute,
  getPartnerSettingsRoute,
  patchPartnerSettingsNewRelicRoute,
} from '../routes'

export const getPartnerSettingsRouteHandler: RouteHandler<typeof getPartnerSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPartnerSettingsNewRelicRouteHandler: RouteHandler<
  typeof getPartnerSettingsNewRelicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPartnerSettingsNewRelicRouteHandler: RouteHandler<
  typeof patchPartnerSettingsNewRelicRoute
> = async (c) => {
  throw new Error('Not implemented')
}
