import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBusinessEntitiesBusinessEntityIdRoute,
  getBusinessEntitiesRoute,
  getBusinessEntitiesTransfersRoute,
  postBusinessEntitiesBusinessEntityIdRoute,
  postBusinessEntitiesRoute,
  postBusinessEntitiesTransfersRoute,
} from '../routes'

export const getBusinessEntitiesBusinessEntityIdRouteHandler: RouteHandler<
  typeof getBusinessEntitiesBusinessEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBusinessEntitiesBusinessEntityIdRouteHandler: RouteHandler<
  typeof postBusinessEntitiesBusinessEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBusinessEntitiesRouteHandler: RouteHandler<
  typeof getBusinessEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBusinessEntitiesRouteHandler: RouteHandler<
  typeof postBusinessEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBusinessEntitiesTransfersRouteHandler: RouteHandler<
  typeof getBusinessEntitiesTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBusinessEntitiesTransfersRouteHandler: RouteHandler<
  typeof postBusinessEntitiesTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
