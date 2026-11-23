import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScaAssociationsRoute,
  getScaAssociationsRoute,
  patchScaAssociationsRoute,
} from '../routes'

export const getScaAssociationsRouteHandler: RouteHandler<typeof getScaAssociationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteScaAssociationsRouteHandler: RouteHandler<
  typeof deleteScaAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchScaAssociationsRouteHandler: RouteHandler<
  typeof patchScaAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
