import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postUsersInfoRoute,
  postUsersPing2Route,
  postUsersPingRoute,
  postUsersSendersRoute,
} from '../routes'

export const postUsersInfoRouteHandler: RouteHandler<typeof postUsersInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersPingRouteHandler: RouteHandler<typeof postUsersPingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersPing2RouteHandler: RouteHandler<typeof postUsersPing2Route> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersSendersRouteHandler: RouteHandler<typeof postUsersSendersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
