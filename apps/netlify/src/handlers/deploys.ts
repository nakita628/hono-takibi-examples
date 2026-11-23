import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDeploysDeployIdRoute,
  getDeploysDeployIdRoute,
  postDeploysDeployIdCancelRoute,
  postDeploysDeployIdLockRoute,
  postDeploysDeployIdUnlockRoute,
  putDeploysDeployIdEdgeFunctionsCodeShaRoute,
  putDeploysDeployIdFilesPathRoute,
  putDeploysDeployIdFunctionsNameRoute,
  putDeploysDeployIdServerCodeShaRoute,
} from '../routes'

export const postDeploysDeployIdCancelRouteHandler: RouteHandler<
  typeof postDeploysDeployIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeploysDeployIdRouteHandler: RouteHandler<typeof getDeploysDeployIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDeploysDeployIdRouteHandler: RouteHandler<
  typeof deleteDeploysDeployIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeploysDeployIdLockRouteHandler: RouteHandler<
  typeof postDeploysDeployIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeploysDeployIdUnlockRouteHandler: RouteHandler<
  typeof postDeploysDeployIdUnlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDeploysDeployIdFilesPathRouteHandler: RouteHandler<
  typeof putDeploysDeployIdFilesPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDeploysDeployIdFunctionsNameRouteHandler: RouteHandler<
  typeof putDeploysDeployIdFunctionsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDeploysDeployIdServerCodeShaRouteHandler: RouteHandler<
  typeof putDeploysDeployIdServerCodeShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDeploysDeployIdEdgeFunctionsCodeShaRouteHandler: RouteHandler<
  typeof putDeploysDeployIdEdgeFunctionsCodeShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
