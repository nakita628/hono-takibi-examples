import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVolumesIdRoute,
  getVolumesActionsIdRoute,
  getVolumesActionsRoute,
  getVolumesIdActionsActionIdRoute,
  getVolumesIdActionsRoute,
  getVolumesIdRoute,
  getVolumesRoute,
  postVolumesIdActionsAttachRoute,
  postVolumesIdActionsChangeProtectionRoute,
  postVolumesIdActionsDetachRoute,
  postVolumesIdActionsResizeRoute,
  postVolumesRoute,
  putVolumesIdRoute,
} from '../routes'

export const getVolumesRouteHandler: RouteHandler<typeof getVolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesRouteHandler: RouteHandler<typeof postVolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVolumesActionsRouteHandler: RouteHandler<typeof getVolumesActionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVolumesActionsIdRouteHandler: RouteHandler<
  typeof getVolumesActionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVolumesIdRouteHandler: RouteHandler<typeof getVolumesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putVolumesIdRouteHandler: RouteHandler<typeof putVolumesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVolumesIdRouteHandler: RouteHandler<typeof deleteVolumesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVolumesIdActionsRouteHandler: RouteHandler<
  typeof getVolumesIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesIdActionsAttachRouteHandler: RouteHandler<
  typeof postVolumesIdActionsAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesIdActionsChangeProtectionRouteHandler: RouteHandler<
  typeof postVolumesIdActionsChangeProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesIdActionsDetachRouteHandler: RouteHandler<
  typeof postVolumesIdActionsDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesIdActionsResizeRouteHandler: RouteHandler<
  typeof postVolumesIdActionsResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVolumesIdActionsActionIdRouteHandler: RouteHandler<
  typeof getVolumesIdActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
