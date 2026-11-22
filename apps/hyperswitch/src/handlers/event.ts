import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEventsMerchantIdEventIdAttemptsRoute,
  postEventsMerchantIdEventIdRetryRoute,
  postEventsMerchantIdRoute,
  postEventsProfileListRoute,
} from '../routes'

export const postEventsMerchantIdRouteHandler: RouteHandler<
  typeof postEventsMerchantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsProfileListRouteHandler: RouteHandler<
  typeof postEventsProfileListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsMerchantIdEventIdAttemptsRouteHandler: RouteHandler<
  typeof getEventsMerchantIdEventIdAttemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsMerchantIdEventIdRetryRouteHandler: RouteHandler<
  typeof postEventsMerchantIdEventIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
