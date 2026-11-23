import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSettingsPhoneNumberRoute,
  getSettingsRoute,
  putSettingsPhoneNumberRoute,
  putSettingsRoute,
} from '../routes'

export const getSettingsRouteHandler: RouteHandler<typeof getSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSettingsRouteHandler: RouteHandler<typeof putSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsPhoneNumberRouteHandler: RouteHandler<
  typeof getSettingsPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSettingsPhoneNumberRouteHandler: RouteHandler<
  typeof putSettingsPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
