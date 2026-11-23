import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDeploymentAllocationsDeploymentIDRoute,
  getDeploymentDeploymentIDRoute,
  postDeploymentAllocationHealthDeploymentIDRoute,
  postDeploymentFailDeploymentIDRoute,
  postDeploymentPauseDeploymentIDRoute,
  postDeploymentPromoteDeploymentIDRoute,
  postDeploymentUnblockDeploymentIDRoute,
} from '../routes'

export const getDeploymentDeploymentIDRouteHandler: RouteHandler<
  typeof getDeploymentDeploymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeploymentAllocationHealthDeploymentIDRouteHandler: RouteHandler<
  typeof postDeploymentAllocationHealthDeploymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeploymentAllocationsDeploymentIDRouteHandler: RouteHandler<
  typeof getDeploymentAllocationsDeploymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeploymentFailDeploymentIDRouteHandler: RouteHandler<
  typeof postDeploymentFailDeploymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeploymentPauseDeploymentIDRouteHandler: RouteHandler<
  typeof postDeploymentPauseDeploymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeploymentPromoteDeploymentIDRouteHandler: RouteHandler<
  typeof postDeploymentPromoteDeploymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeploymentUnblockDeploymentIDRouteHandler: RouteHandler<
  typeof postDeploymentUnblockDeploymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
