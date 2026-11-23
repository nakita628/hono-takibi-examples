import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteImagesIdRoute,
  getImagesActionsIdRoute,
  getImagesActionsRoute,
  getImagesIdActionsActionIdRoute,
  getImagesIdActionsRoute,
  getImagesIdRoute,
  getImagesRoute,
  postImagesIdActionsChangeProtectionRoute,
  putImagesIdRoute,
} from '../routes'

export const getImagesRouteHandler: RouteHandler<typeof getImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesActionsRouteHandler: RouteHandler<typeof getImagesActionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getImagesActionsIdRouteHandler: RouteHandler<typeof getImagesActionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getImagesIdRouteHandler: RouteHandler<typeof getImagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putImagesIdRouteHandler: RouteHandler<typeof putImagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteImagesIdRouteHandler: RouteHandler<typeof deleteImagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesIdActionsRouteHandler: RouteHandler<typeof getImagesIdActionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postImagesIdActionsChangeProtectionRouteHandler: RouteHandler<
  typeof postImagesIdActionsChangeProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesIdActionsActionIdRouteHandler: RouteHandler<
  typeof getImagesIdActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
