import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRampsRampIdRoute,
  getRampsRoute,
  postRampsRampIdDeleteRoute,
  postRampsRampIdUpdateRoute,
} from '../routes'

export const getRampsRampIdRouteHandler: RouteHandler<typeof getRampsRampIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRampsRouteHandler: RouteHandler<typeof getRampsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRampsRampIdUpdateRouteHandler: RouteHandler<
  typeof postRampsRampIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRampsRampIdDeleteRouteHandler: RouteHandler<
  typeof postRampsRampIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
