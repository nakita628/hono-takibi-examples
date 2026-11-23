import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteExternalLocationsNameRoute,
  getExternalLocationsNameRoute,
  getExternalLocationsRoute,
  patchExternalLocationsNameRoute,
  postExternalLocationsRoute,
} from '../routes'

export const postExternalLocationsRouteHandler: RouteHandler<
  typeof postExternalLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExternalLocationsRouteHandler: RouteHandler<
  typeof getExternalLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExternalLocationsNameRouteHandler: RouteHandler<
  typeof getExternalLocationsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteExternalLocationsNameRouteHandler: RouteHandler<
  typeof deleteExternalLocationsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchExternalLocationsNameRouteHandler: RouteHandler<
  typeof patchExternalLocationsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
