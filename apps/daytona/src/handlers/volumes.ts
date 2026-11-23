import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVolumesVolumeIdRoute,
  getVolumesByNameNameRoute,
  getVolumesRoute,
  getVolumesVolumeIdRoute,
  postVolumesRoute,
} from '../routes'

export const getVolumesRouteHandler: RouteHandler<typeof getVolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesRouteHandler: RouteHandler<typeof postVolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVolumesVolumeIdRouteHandler: RouteHandler<
  typeof deleteVolumesVolumeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVolumesVolumeIdRouteHandler: RouteHandler<typeof getVolumesVolumeIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVolumesByNameNameRouteHandler: RouteHandler<
  typeof getVolumesByNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
