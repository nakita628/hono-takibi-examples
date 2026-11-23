import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGlobalIpAssignmentsIdRoute,
  getGlobalIpAssignmentsIdRoute,
  getGlobalIpAssignmentsRoute,
  getGlobalIpAssignmentsUsageRoute,
  patchGlobalIpAssignmentsIdRoute,
  postGlobalIpAssignmentsRoute,
} from '../routes'

export const getGlobalIpAssignmentsRouteHandler: RouteHandler<
  typeof getGlobalIpAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGlobalIpAssignmentsRouteHandler: RouteHandler<
  typeof postGlobalIpAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGlobalIpAssignmentsUsageRouteHandler: RouteHandler<
  typeof getGlobalIpAssignmentsUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGlobalIpAssignmentsIdRouteHandler: RouteHandler<
  typeof deleteGlobalIpAssignmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGlobalIpAssignmentsIdRouteHandler: RouteHandler<
  typeof getGlobalIpAssignmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchGlobalIpAssignmentsIdRouteHandler: RouteHandler<
  typeof patchGlobalIpAssignmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
