import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteClustersClusterIDRigsInstancesInstanceIDRoute,
  getClustersClusterIDRigsRigIDErrorsRoute,
  getClustersClusterIDRigsRigIDInstancesRoute,
  getClustersClusterIDRigsRoute,
  putClustersClusterIDRigsRigIDCapacityRoute,
} from '../routes'

export const getClustersClusterIDRigsRouteHandler: RouteHandler<
  typeof getClustersClusterIDRigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putClustersClusterIDRigsRigIDCapacityRouteHandler: RouteHandler<
  typeof putClustersClusterIDRigsRigIDCapacityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteClustersClusterIDRigsInstancesInstanceIDRouteHandler: RouteHandler<
  typeof deleteClustersClusterIDRigsInstancesInstanceIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClustersClusterIDRigsRigIDInstancesRouteHandler: RouteHandler<
  typeof getClustersClusterIDRigsRigIDInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClustersClusterIDRigsRigIDErrorsRouteHandler: RouteHandler<
  typeof getClustersClusterIDRigsRigIDErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
