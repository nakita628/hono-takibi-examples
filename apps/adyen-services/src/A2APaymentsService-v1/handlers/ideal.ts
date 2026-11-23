import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postIdealProfileAuthenticateRoute,
  postIdealProfileAuthLinkRoute,
  postIdealProfileRegisterRoute,
} from '../routes'

export const postIdealProfileAuthLinkRouteHandler: RouteHandler<
  typeof postIdealProfileAuthLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdealProfileAuthenticateRouteHandler: RouteHandler<
  typeof postIdealProfileAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdealProfileRegisterRouteHandler: RouteHandler<
  typeof postIdealProfileRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
