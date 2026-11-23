import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWarninglistsRoute,
  getWarninglistsViewWarninglistIdRoute,
  postWarninglistsCheckValueRoute,
  postWarninglistsRoute,
  postWarninglistsToggleEnableRoute,
  postWarninglistsUpdateRoute,
} from '../routes'

export const getWarninglistsRouteHandler: RouteHandler<typeof getWarninglistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWarninglistsRouteHandler: RouteHandler<typeof postWarninglistsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWarninglistsToggleEnableRouteHandler: RouteHandler<
  typeof postWarninglistsToggleEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWarninglistsViewWarninglistIdRouteHandler: RouteHandler<
  typeof getWarninglistsViewWarninglistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWarninglistsCheckValueRouteHandler: RouteHandler<
  typeof postWarninglistsCheckValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWarninglistsUpdateRouteHandler: RouteHandler<
  typeof postWarninglistsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
