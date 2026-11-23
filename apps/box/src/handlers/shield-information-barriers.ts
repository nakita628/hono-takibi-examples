import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShieldInformationBarriersRoute,
  getShieldInformationBarriersShieldInformationBarrierIdRoute,
  postShieldInformationBarriersChangeStatusRoute,
  postShieldInformationBarriersRoute,
} from '../routes'

export const getShieldInformationBarriersShieldInformationBarrierIdRouteHandler: RouteHandler<
  typeof getShieldInformationBarriersShieldInformationBarrierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postShieldInformationBarriersChangeStatusRouteHandler: RouteHandler<
  typeof postShieldInformationBarriersChangeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShieldInformationBarriersRouteHandler: RouteHandler<
  typeof getShieldInformationBarriersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postShieldInformationBarriersRouteHandler: RouteHandler<
  typeof postShieldInformationBarriersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
