import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSourcesSourceIDRoute,
  getSourcesRoute,
  getSourcesSourceIDBucketsRoute,
  getSourcesSourceIDHealthRoute,
  getSourcesSourceIDRoute,
  patchSourcesSourceIDRoute,
  postSourcesRoute,
} from '../routes'

export const getSourcesRouteHandler: RouteHandler<typeof getSourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesRouteHandler: RouteHandler<typeof postSourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesSourceIDRouteHandler: RouteHandler<
  typeof deleteSourcesSourceIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesSourceIDRouteHandler: RouteHandler<typeof getSourcesSourceIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSourcesSourceIDRouteHandler: RouteHandler<
  typeof patchSourcesSourceIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesSourceIDBucketsRouteHandler: RouteHandler<
  typeof getSourcesSourceIDBucketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesSourceIDHealthRouteHandler: RouteHandler<
  typeof getSourcesSourceIDHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
