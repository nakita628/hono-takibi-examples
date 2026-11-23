import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSystemFeedsFeedGroupRoute,
  deleteSystemFeedsFeedRoute,
  deleteSystemServicesServicenameHostidRoute,
  getSystemErrorCodesRoute,
  getSystemFeedsRoute,
  getSystemPolicySpecRoute,
  getSystemRoute,
  getSystemServicesRoute,
  getSystemServicesServicenameHostidRoute,
  getSystemServicesServicenameRoute,
  postSystemFeedsRoute,
  postSystemWebhooksWebhookTypeTestRoute,
  putSystemFeedsFeedGroupRoute,
  putSystemFeedsFeedRoute,
} from '../routes'

export const getSystemRouteHandler: RouteHandler<typeof getSystemRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemErrorCodesRouteHandler: RouteHandler<
  typeof getSystemErrorCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemFeedsRouteHandler: RouteHandler<typeof getSystemFeedsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemFeedsRouteHandler: RouteHandler<typeof postSystemFeedsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSystemFeedsFeedRouteHandler: RouteHandler<
  typeof deleteSystemFeedsFeedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSystemFeedsFeedRouteHandler: RouteHandler<typeof putSystemFeedsFeedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSystemFeedsFeedGroupRouteHandler: RouteHandler<
  typeof deleteSystemFeedsFeedGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSystemFeedsFeedGroupRouteHandler: RouteHandler<
  typeof putSystemFeedsFeedGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemPolicySpecRouteHandler: RouteHandler<
  typeof getSystemPolicySpecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemServicesRouteHandler: RouteHandler<typeof getSystemServicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSystemServicesServicenameRouteHandler: RouteHandler<
  typeof getSystemServicesServicenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSystemServicesServicenameHostidRouteHandler: RouteHandler<
  typeof deleteSystemServicesServicenameHostidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemServicesServicenameHostidRouteHandler: RouteHandler<
  typeof getSystemServicesServicenameHostidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemWebhooksWebhookTypeTestRouteHandler: RouteHandler<
  typeof postSystemWebhooksWebhookTypeTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
