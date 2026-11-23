import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVolumesVolumeIdRoute,
  getVolumesRoute,
  getVolumesVolumeIdRoute,
  postVolumesRoute,
  postVolumesVolumeIdAttachRoute,
  postVolumesVolumeIdCloneRoute,
  postVolumesVolumeIdDetachRoute,
  postVolumesVolumeIdResizeRoute,
  putVolumesVolumeIdRoute,
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

export const putVolumesVolumeIdRouteHandler: RouteHandler<typeof putVolumesVolumeIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVolumesVolumeIdAttachRouteHandler: RouteHandler<
  typeof postVolumesVolumeIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesVolumeIdCloneRouteHandler: RouteHandler<
  typeof postVolumesVolumeIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesVolumeIdDetachRouteHandler: RouteHandler<
  typeof postVolumesVolumeIdDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesVolumeIdResizeRouteHandler: RouteHandler<
  typeof postVolumesVolumeIdResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
