import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAgentsSubscriptionsSubscriptionIdRoute,
  getAgentsSubscriptionsRoute,
  getAgentsSubscriptionsSubscriptionIdRoute,
  getAgentsTypesRoute,
  getAgentsTypesTypeRoute,
  postAgentsSearchRoute,
  postAgentsSubscriptionsRoute,
  putAgentsSubscriptionsSubscriptionIdRoute,
} from '../routes'

export const getAgentsSubscriptionsRouteHandler: RouteHandler<
  typeof getAgentsSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAgentsSubscriptionsRouteHandler: RouteHandler<
  typeof postAgentsSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentsSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getAgentsSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAgentsSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof putAgentsSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAgentsSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteAgentsSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentsTypesRouteHandler: RouteHandler<typeof getAgentsTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentsTypesTypeRouteHandler: RouteHandler<typeof getAgentsTypesTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAgentsSearchRouteHandler: RouteHandler<typeof postAgentsSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
