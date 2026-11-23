import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVolumesNameRoute,
  getVolumesNameRoute,
  getVolumesRoute,
  patchVolumesNameRoute,
  postVolumesRoute,
} from '../routes'

export const postVolumesRouteHandler: RouteHandler<typeof postVolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVolumesRouteHandler: RouteHandler<typeof getVolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVolumesNameRouteHandler: RouteHandler<typeof getVolumesNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVolumesNameRouteHandler: RouteHandler<typeof patchVolumesNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteVolumesNameRouteHandler: RouteHandler<typeof deleteVolumesNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
