import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAliasNameRoute,
  getAliasRoute,
  headAliasNameRoute,
  postAliasRolloverNewIndexRoute,
  postAliasRolloverRoute,
} from '../routes'

export const getAliasNameRouteHandler: RouteHandler<typeof getAliasNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headAliasNameRouteHandler: RouteHandler<typeof headAliasNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAliasRouteHandler: RouteHandler<typeof getAliasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAliasRolloverRouteHandler: RouteHandler<typeof postAliasRolloverRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAliasRolloverNewIndexRouteHandler: RouteHandler<
  typeof postAliasRolloverNewIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
