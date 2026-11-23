import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNormLawFirmSearchNormLawFirmSearchIdRoute,
  getNormLawFirmSearchRoute,
} from '../routes'

export const getNormLawFirmSearchRouteHandler: RouteHandler<
  typeof getNormLawFirmSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNormLawFirmSearchNormLawFirmSearchIdRouteHandler: RouteHandler<
  typeof getNormLawFirmSearchNormLawFirmSearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
