import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserPhotoRoute,
  getUserFiltersettingsEmployerIdRoute,
  getUserPhotoRoute,
  getUserRoute,
  postUserPhotoRoute,
  putUserFiltersettingsEmployerIdRoute,
  putUserRoute,
} from '../routes'

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserRouteHandler: RouteHandler<typeof putUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserFiltersettingsEmployerIdRouteHandler: RouteHandler<
  typeof getUserFiltersettingsEmployerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserFiltersettingsEmployerIdRouteHandler: RouteHandler<
  typeof putUserFiltersettingsEmployerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserPhotoRouteHandler: RouteHandler<typeof deleteUserPhotoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserPhotoRouteHandler: RouteHandler<typeof getUserPhotoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserPhotoRouteHandler: RouteHandler<typeof postUserPhotoRoute> = async (c) => {
  throw new Error('Not implemented')
}
