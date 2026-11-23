import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRelationTuplesCheckOpenapiRoute,
  getRelationTuplesCheckRoute,
  getRelationTuplesExpandRoute,
  getRelationTuplesRoute,
  postRelationTuplesBatchCheckRoute,
  postRelationTuplesCheckOpenapiRoute,
  postRelationTuplesCheckRoute,
} from '../routes'

export const getRelationTuplesRouteHandler: RouteHandler<typeof getRelationTuplesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRelationTuplesBatchCheckRouteHandler: RouteHandler<
  typeof postRelationTuplesBatchCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRelationTuplesCheckRouteHandler: RouteHandler<
  typeof getRelationTuplesCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRelationTuplesCheckRouteHandler: RouteHandler<
  typeof postRelationTuplesCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRelationTuplesCheckOpenapiRouteHandler: RouteHandler<
  typeof getRelationTuplesCheckOpenapiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRelationTuplesCheckOpenapiRouteHandler: RouteHandler<
  typeof postRelationTuplesCheckOpenapiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRelationTuplesExpandRouteHandler: RouteHandler<
  typeof getRelationTuplesExpandRoute
> = async (c) => {
  throw new Error('Not implemented')
}
