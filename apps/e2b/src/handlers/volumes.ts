import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVolumesVolumeIDRoute,
  getVolumesRoute,
  getVolumesVolumeIDRoute,
  postVolumesRoute,
} from '../routes'

export const getVolumesRouteHandler: RouteHandler<typeof getVolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesRouteHandler: RouteHandler<typeof postVolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVolumesVolumeIDRouteHandler: RouteHandler<typeof getVolumesVolumeIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteVolumesVolumeIDRouteHandler: RouteHandler<
  typeof deleteVolumesVolumeIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
