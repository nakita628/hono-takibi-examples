import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEnrichPolicyNameRoute,
  getEnrichPolicyNameRoute,
  getEnrichPolicyRoute,
  getEnrichStatsRoute,
  putEnrichPolicyNameExecuteRoute,
  putEnrichPolicyNameRoute,
} from '../routes'

export const getEnrichPolicyNameRouteHandler: RouteHandler<
  typeof getEnrichPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEnrichPolicyNameRouteHandler: RouteHandler<
  typeof putEnrichPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEnrichPolicyNameRouteHandler: RouteHandler<
  typeof deleteEnrichPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEnrichPolicyNameExecuteRouteHandler: RouteHandler<
  typeof putEnrichPolicyNameExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnrichPolicyRouteHandler: RouteHandler<typeof getEnrichPolicyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnrichStatsRouteHandler: RouteHandler<typeof getEnrichStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
