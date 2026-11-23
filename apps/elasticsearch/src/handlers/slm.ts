import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSlmPolicyPolicyIdRoute,
  getSlmPolicyPolicyIdRoute,
  getSlmPolicyRoute,
  getSlmStatsRoute,
  getSlmStatusRoute,
  postSlmExecuteRetentionRoute,
  postSlmStartRoute,
  postSlmStopRoute,
  putSlmPolicyPolicyIdExecuteRoute,
  putSlmPolicyPolicyIdRoute,
} from '../routes'

export const getSlmPolicyPolicyIdRouteHandler: RouteHandler<
  typeof getSlmPolicyPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSlmPolicyPolicyIdRouteHandler: RouteHandler<
  typeof putSlmPolicyPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSlmPolicyPolicyIdRouteHandler: RouteHandler<
  typeof deleteSlmPolicyPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSlmPolicyPolicyIdExecuteRouteHandler: RouteHandler<
  typeof putSlmPolicyPolicyIdExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSlmExecuteRetentionRouteHandler: RouteHandler<
  typeof postSlmExecuteRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSlmPolicyRouteHandler: RouteHandler<typeof getSlmPolicyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSlmStatsRouteHandler: RouteHandler<typeof getSlmStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSlmStatusRouteHandler: RouteHandler<typeof getSlmStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSlmStartRouteHandler: RouteHandler<typeof postSlmStartRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSlmStopRouteHandler: RouteHandler<typeof postSlmStopRoute> = async (c) => {
  throw new Error('Not implemented')
}
