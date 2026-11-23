import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDimensionsNameRoute,
  getDimensionsNameRoute,
  getDimensionsRoute,
  patchDimensionsNameRoute,
  postDimensionsNameRoute,
} from '../routes'

export const postDimensionsNameRouteHandler: RouteHandler<typeof postDimensionsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDimensionsNameRouteHandler: RouteHandler<
  typeof deleteDimensionsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDimensionsNameRouteHandler: RouteHandler<typeof getDimensionsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchDimensionsNameRouteHandler: RouteHandler<
  typeof patchDimensionsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDimensionsRouteHandler: RouteHandler<typeof getDimensionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
