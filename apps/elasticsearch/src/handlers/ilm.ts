import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIlmPolicyPolicyRoute,
  getIlmPolicyPolicyRoute,
  getIlmPolicyRoute,
  getIlmStatusRoute,
  postIlmMigrateToDataTiersRoute,
  postIlmMoveIndexRoute,
  postIlmStartRoute,
  postIlmStopRoute,
  putIlmPolicyPolicyRoute,
} from '../routes'

export const getIlmPolicyPolicyRouteHandler: RouteHandler<typeof getIlmPolicyPolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putIlmPolicyPolicyRouteHandler: RouteHandler<typeof putIlmPolicyPolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIlmPolicyPolicyRouteHandler: RouteHandler<
  typeof deleteIlmPolicyPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIlmPolicyRouteHandler: RouteHandler<typeof getIlmPolicyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIlmStatusRouteHandler: RouteHandler<typeof getIlmStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIlmMigrateToDataTiersRouteHandler: RouteHandler<
  typeof postIlmMigrateToDataTiersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIlmMoveIndexRouteHandler: RouteHandler<typeof postIlmMoveIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIlmStartRouteHandler: RouteHandler<typeof postIlmStartRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIlmStopRouteHandler: RouteHandler<typeof postIlmStopRoute> = async (c) => {
  throw new Error('Not implemented')
}
