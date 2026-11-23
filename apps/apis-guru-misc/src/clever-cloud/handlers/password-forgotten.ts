import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPasswordForgottenKeyRoute,
  getPasswordForgottenRoute,
  postPasswordForgottenKeyRoute,
  postPasswordForgottenRoute,
} from '../routes'

export const getPasswordForgottenRouteHandler: RouteHandler<
  typeof getPasswordForgottenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPasswordForgottenRouteHandler: RouteHandler<
  typeof postPasswordForgottenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPasswordForgottenKeyRouteHandler: RouteHandler<
  typeof getPasswordForgottenKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPasswordForgottenKeyRouteHandler: RouteHandler<
  typeof postPasswordForgottenKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
