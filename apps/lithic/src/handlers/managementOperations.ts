import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1ManagementOperationsManagementOperationTokenRoute,
  getV1ManagementOperationsRoute,
  postV1ManagementOperationsManagementOperationTokenReverseRoute,
  postV1ManagementOperationsRoute,
} from '../routes'

export const getV1ManagementOperationsRouteHandler: RouteHandler<
  typeof getV1ManagementOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ManagementOperationsRouteHandler: RouteHandler<
  typeof postV1ManagementOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ManagementOperationsManagementOperationTokenRouteHandler: RouteHandler<
  typeof getV1ManagementOperationsManagementOperationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ManagementOperationsManagementOperationTokenReverseRouteHandler: RouteHandler<
  typeof postV1ManagementOperationsManagementOperationTokenReverseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
