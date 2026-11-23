import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiV2ClustersClusterArnOperationsRoute,
  getApiV2ClustersClusterArnRoute,
  getApiV2ClustersRoute,
  getApiV2OperationsClusterOperationArnRoute,
  postApiV2ClustersRoute,
} from '../routes'

export const postApiV2ClustersRouteHandler: RouteHandler<typeof postApiV2ClustersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2ClustersRouteHandler: RouteHandler<typeof getApiV2ClustersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2ClustersClusterArnRouteHandler: RouteHandler<
  typeof getApiV2ClustersClusterArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OperationsClusterOperationArnRouteHandler: RouteHandler<
  typeof getApiV2OperationsClusterOperationArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ClustersClusterArnOperationsRouteHandler: RouteHandler<
  typeof getApiV2ClustersClusterArnOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
