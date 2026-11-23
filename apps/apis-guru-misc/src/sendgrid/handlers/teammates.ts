import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTeammatesPendingTokenRoute,
  deleteTeammatesUsernameRoute,
  getTeammatesPendingRoute,
  getTeammatesRoute,
  getTeammatesUsernameRoute,
  patchTeammatesUsernameRoute,
  postTeammatesPendingTokenResendRoute,
  postTeammatesRoute,
} from '../routes'

export const getTeammatesRouteHandler: RouteHandler<typeof getTeammatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeammatesRouteHandler: RouteHandler<typeof postTeammatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeammatesPendingRouteHandler: RouteHandler<
  typeof getTeammatesPendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeammatesPendingTokenRouteHandler: RouteHandler<
  typeof deleteTeammatesPendingTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeammatesPendingTokenResendRouteHandler: RouteHandler<
  typeof postTeammatesPendingTokenResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeammatesUsernameRouteHandler: RouteHandler<
  typeof deleteTeammatesUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeammatesUsernameRouteHandler: RouteHandler<
  typeof getTeammatesUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeammatesUsernameRouteHandler: RouteHandler<
  typeof patchTeammatesUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
