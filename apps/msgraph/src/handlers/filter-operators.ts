import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFilterOperatorsFilterOperatorSchemaIdRoute,
  getFilterOperatorsCountRoute,
  getFilterOperatorsFilterOperatorSchemaIdRoute,
  getFilterOperatorsRoute,
  patchFilterOperatorsFilterOperatorSchemaIdRoute,
  postFilterOperatorsRoute,
} from '../routes'

export const getFilterOperatorsRouteHandler: RouteHandler<typeof getFilterOperatorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFilterOperatorsRouteHandler: RouteHandler<
  typeof postFilterOperatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilterOperatorsFilterOperatorSchemaIdRouteHandler: RouteHandler<
  typeof getFilterOperatorsFilterOperatorSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFilterOperatorsFilterOperatorSchemaIdRouteHandler: RouteHandler<
  typeof patchFilterOperatorsFilterOperatorSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFilterOperatorsFilterOperatorSchemaIdRouteHandler: RouteHandler<
  typeof deleteFilterOperatorsFilterOperatorSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilterOperatorsCountRouteHandler: RouteHandler<
  typeof getFilterOperatorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
