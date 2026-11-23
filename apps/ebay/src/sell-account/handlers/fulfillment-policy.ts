import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFulfillmentPolicyFulfillmentPolicyIdRoute,
  getFulfillmentPolicyFulfillmentPolicyIdRoute,
  getFulfillmentPolicyGetByPolicyNameRoute,
  getFulfillmentPolicyRoute,
  postFulfillmentPolicyIndexRoute,
  putFulfillmentPolicyFulfillmentPolicyIdRoute,
} from '../routes'

export const getFulfillmentPolicyRouteHandler: RouteHandler<
  typeof getFulfillmentPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFulfillmentPolicyIndexRouteHandler: RouteHandler<
  typeof postFulfillmentPolicyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFulfillmentPolicyGetByPolicyNameRouteHandler: RouteHandler<
  typeof getFulfillmentPolicyGetByPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFulfillmentPolicyFulfillmentPolicyIdRouteHandler: RouteHandler<
  typeof deleteFulfillmentPolicyFulfillmentPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFulfillmentPolicyFulfillmentPolicyIdRouteHandler: RouteHandler<
  typeof getFulfillmentPolicyFulfillmentPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putFulfillmentPolicyFulfillmentPolicyIdRouteHandler: RouteHandler<
  typeof putFulfillmentPolicyFulfillmentPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
