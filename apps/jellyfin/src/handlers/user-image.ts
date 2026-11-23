import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserImageRoute,
  getUserImageRoute,
  headUserImageRoute,
  postUserImageRoute,
} from '../routes'

export const postUserImageRouteHandler: RouteHandler<typeof postUserImageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserImageRouteHandler: RouteHandler<typeof deleteUserImageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserImageRouteHandler: RouteHandler<typeof getUserImageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headUserImageRouteHandler: RouteHandler<typeof headUserImageRoute> = async (c) => {
  throw new Error('Not implemented')
}
