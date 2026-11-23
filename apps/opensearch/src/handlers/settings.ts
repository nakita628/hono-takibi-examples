import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsNameRoute, getSettingsRoute, putSettingsRoute } from '../routes'

export const getSettingsRouteHandler: RouteHandler<typeof getSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSettingsRouteHandler: RouteHandler<typeof putSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsNameRouteHandler: RouteHandler<typeof getSettingsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
