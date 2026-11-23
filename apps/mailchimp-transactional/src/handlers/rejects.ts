import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postRejectsAddRoute,
  postRejectsAddSmsRoute,
  postRejectsDeleteRoute,
  postRejectsDeleteSmsRoute,
  postRejectsListRoute,
  postRejectsListSmsRoute,
} from '../routes'

export const postRejectsAddRouteHandler: RouteHandler<typeof postRejectsAddRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRejectsAddSmsRouteHandler: RouteHandler<typeof postRejectsAddSmsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRejectsListRouteHandler: RouteHandler<typeof postRejectsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRejectsListSmsRouteHandler: RouteHandler<typeof postRejectsListSmsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRejectsDeleteRouteHandler: RouteHandler<typeof postRejectsDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRejectsDeleteSmsRouteHandler: RouteHandler<
  typeof postRejectsDeleteSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
