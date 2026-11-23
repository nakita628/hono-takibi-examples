import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTeamsPageNumKeysRoute,
  getTeamsPageNumRoute,
  getTeamsPageNumSimpleRoute,
  getTeamsYearPageNumKeysRoute,
  getTeamsYearPageNumRoute,
  getTeamsYearPageNumSimpleRoute,
} from '../routes'

export const getTeamsPageNumRouteHandler: RouteHandler<typeof getTeamsPageNumRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsPageNumKeysRouteHandler: RouteHandler<
  typeof getTeamsPageNumKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsPageNumSimpleRouteHandler: RouteHandler<
  typeof getTeamsPageNumSimpleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsYearPageNumRouteHandler: RouteHandler<
  typeof getTeamsYearPageNumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsYearPageNumKeysRouteHandler: RouteHandler<
  typeof getTeamsYearPageNumKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsYearPageNumSimpleRouteHandler: RouteHandler<
  typeof getTeamsYearPageNumSimpleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
