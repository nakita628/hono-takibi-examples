import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentFeedbackReportsRoute,
  getV1ParentGroupsRoute,
  getV1ParentReleasesRoute,
  getV1ParentTestersRoute,
  patchV1NameRoute,
  postV1AppReleasesUploadRoute,
  postV1GroupBatchJoinRoute,
  postV1GroupBatchLeaveRoute,
  postV1NameCancelRoute,
  postV1NameDistributeRoute,
  postV1NameWaitRoute,
  postV1ParentGroupsRoute,
  postV1ParentReleasesBatchDeleteRoute,
  postV1ProjectTestersBatchAddRoute,
  postV1ProjectTestersBatchRemoveRoute,
} from '../routes'

export const postV1AppReleasesUploadRouteHandler: RouteHandler<
  typeof postV1AppReleasesUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GroupBatchJoinRouteHandler: RouteHandler<
  typeof postV1GroupBatchJoinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GroupBatchLeaveRouteHandler: RouteHandler<
  typeof postV1GroupBatchLeaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameOperationsRouteHandler: RouteHandler<
  typeof getV1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameCancelRouteHandler: RouteHandler<typeof postV1NameCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameDistributeRouteHandler: RouteHandler<
  typeof postV1NameDistributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameWaitRouteHandler: RouteHandler<typeof postV1NameWaitRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentFeedbackReportsRouteHandler: RouteHandler<
  typeof getV1ParentFeedbackReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentGroupsRouteHandler: RouteHandler<typeof getV1ParentGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ParentGroupsRouteHandler: RouteHandler<typeof postV1ParentGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParentReleasesRouteHandler: RouteHandler<
  typeof getV1ParentReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentReleasesBatchDeleteRouteHandler: RouteHandler<
  typeof postV1ParentReleasesBatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentTestersRouteHandler: RouteHandler<typeof getV1ParentTestersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ProjectTestersBatchAddRouteHandler: RouteHandler<
  typeof postV1ProjectTestersBatchAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectTestersBatchRemoveRouteHandler: RouteHandler<
  typeof postV1ProjectTestersBatchRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
