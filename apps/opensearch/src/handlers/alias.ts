import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAliasNameRoute,
  getAliasRoute,
  headAliasNameRoute,
  postAliasNameRoute,
  postAliasRolloverNewIndexRoute,
  postAliasRolloverRoute,
  putAliasNameRoute,
  putAliasRoute,
} from '../routes'

export const getAliasRouteHandler: RouteHandler<typeof getAliasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAliasRouteHandler: RouteHandler<typeof putAliasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAliasNameRouteHandler: RouteHandler<typeof getAliasNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headAliasNameRouteHandler: RouteHandler<typeof headAliasNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAliasNameRouteHandler: RouteHandler<typeof postAliasNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAliasNameRouteHandler: RouteHandler<typeof putAliasNameRoute> = async (c) => {
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
