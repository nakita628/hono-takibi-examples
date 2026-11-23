import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountRoute,
  getAccountSettingsRoute,
  postAccountCreateRoute,
  postAccountSettingsRoute,
  postAccountVerifyRoute,
  putAccountRoute,
} from '../routes'

export const postAccountCreateRouteHandler: RouteHandler<typeof postAccountCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAccountRouteHandler: RouteHandler<typeof getAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountRouteHandler: RouteHandler<typeof putAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountSettingsRouteHandler: RouteHandler<typeof getAccountSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAccountSettingsRouteHandler: RouteHandler<
  typeof postAccountSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountVerifyRouteHandler: RouteHandler<typeof postAccountVerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
