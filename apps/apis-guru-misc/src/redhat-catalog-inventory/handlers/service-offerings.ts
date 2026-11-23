import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getServiceOfferingsIdRoute,
  getServiceOfferingsIdServiceInstancesRoute,
  getServiceOfferingsIdServiceOfferingNodesRoute,
  getServiceOfferingsIdServicePlansRoute,
  getServiceOfferingsRoute,
  postServiceOfferingsIdAppliedInventoriesTagsRoute,
  postServiceOfferingsIdOrderRoute,
} from '../routes'

export const getServiceOfferingsRouteHandler: RouteHandler<
  typeof getServiceOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceOfferingsIdRouteHandler: RouteHandler<
  typeof getServiceOfferingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServiceOfferingsIdAppliedInventoriesTagsRouteHandler: RouteHandler<
  typeof postServiceOfferingsIdAppliedInventoriesTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServiceOfferingsIdOrderRouteHandler: RouteHandler<
  typeof postServiceOfferingsIdOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceOfferingsIdServiceInstancesRouteHandler: RouteHandler<
  typeof getServiceOfferingsIdServiceInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceOfferingsIdServiceOfferingNodesRouteHandler: RouteHandler<
  typeof getServiceOfferingsIdServiceOfferingNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceOfferingsIdServicePlansRouteHandler: RouteHandler<
  typeof getServiceOfferingsIdServicePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}
