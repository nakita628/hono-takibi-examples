import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDataPolicyOperationsDataPolicyOperationIdRoute,
  getDataPolicyOperationsCountRoute,
  getDataPolicyOperationsDataPolicyOperationIdRoute,
  getDataPolicyOperationsRoute,
  patchDataPolicyOperationsDataPolicyOperationIdRoute,
  postDataPolicyOperationsRoute,
} from '../routes'

export const getDataPolicyOperationsRouteHandler: RouteHandler<
  typeof getDataPolicyOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDataPolicyOperationsRouteHandler: RouteHandler<
  typeof postDataPolicyOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataPolicyOperationsCountRouteHandler: RouteHandler<
  typeof getDataPolicyOperationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDataPolicyOperationsDataPolicyOperationIdRouteHandler: RouteHandler<
  typeof deleteDataPolicyOperationsDataPolicyOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataPolicyOperationsDataPolicyOperationIdRouteHandler: RouteHandler<
  typeof getDataPolicyOperationsDataPolicyOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDataPolicyOperationsDataPolicyOperationIdRouteHandler: RouteHandler<
  typeof patchDataPolicyOperationsDataPolicyOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
