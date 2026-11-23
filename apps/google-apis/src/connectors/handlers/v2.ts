import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2NameRoute,
  getV2NameRoute,
  getV2ParentActionsRoute,
  getV2ParentEntitiesRoute,
  getV2ParentEntityTypesRoute,
  patchV2NameRoute,
  postV2ConnectionExecuteSqlQueryRoute,
  postV2EntityTypeEntitiesDeleteEntitiesWithConditionsRoute,
  postV2EntityTypeEntitiesUpdateEntitiesWithConditionsRoute,
  postV2NameExecuteRoute,
  postV2ParentEntitiesRoute,
} from '../routes'

export const postV2ConnectionExecuteSqlQueryRouteHandler: RouteHandler<
  typeof postV2ConnectionExecuteSqlQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EntityTypeEntitiesDeleteEntitiesWithConditionsRouteHandler: RouteHandler<
  typeof postV2EntityTypeEntitiesDeleteEntitiesWithConditionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EntityTypeEntitiesUpdateEntitiesWithConditionsRouteHandler: RouteHandler<
  typeof postV2EntityTypeEntitiesUpdateEntitiesWithConditionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2NameRouteHandler: RouteHandler<typeof deleteV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2NameRouteHandler: RouteHandler<typeof getV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2NameRouteHandler: RouteHandler<typeof patchV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2NameExecuteRouteHandler: RouteHandler<typeof postV2NameExecuteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2ParentActionsRouteHandler: RouteHandler<typeof getV2ParentActionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2ParentEntitiesRouteHandler: RouteHandler<
  typeof getV2ParentEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ParentEntitiesRouteHandler: RouteHandler<
  typeof postV2ParentEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ParentEntityTypesRouteHandler: RouteHandler<
  typeof getV2ParentEntityTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
