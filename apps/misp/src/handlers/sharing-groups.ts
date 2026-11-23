import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSharingGroupsDeleteSharingGroupIdRoute,
  getSharingGroupsRoute,
  getSharingGroupsViewSharingGroupIdRoute,
  postSharingGroupsAddOrgSharingGroupIdOrganisationIdRoute,
  postSharingGroupsAddRoute,
  postSharingGroupsAddServerSharingGroupIdServerIdRoute,
  postSharingGroupsEditSharingGroupIdRoute,
  postSharingGroupsRemoveOrgSharingGroupIdOrganisationIdRoute,
  postSharingGroupsRemoveServerSharingGroupServerIdServerIdRoute,
} from '../routes'

export const postSharingGroupsAddRouteHandler: RouteHandler<
  typeof postSharingGroupsAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharingGroupsEditSharingGroupIdRouteHandler: RouteHandler<
  typeof postSharingGroupsEditSharingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharingGroupsDeleteSharingGroupIdRouteHandler: RouteHandler<
  typeof deleteSharingGroupsDeleteSharingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharingGroupsRouteHandler: RouteHandler<typeof getSharingGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSharingGroupsViewSharingGroupIdRouteHandler: RouteHandler<
  typeof getSharingGroupsViewSharingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharingGroupsAddOrgSharingGroupIdOrganisationIdRouteHandler: RouteHandler<
  typeof postSharingGroupsAddOrgSharingGroupIdOrganisationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharingGroupsRemoveOrgSharingGroupIdOrganisationIdRouteHandler: RouteHandler<
  typeof postSharingGroupsRemoveOrgSharingGroupIdOrganisationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharingGroupsAddServerSharingGroupIdServerIdRouteHandler: RouteHandler<
  typeof postSharingGroupsAddServerSharingGroupIdServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharingGroupsRemoveServerSharingGroupServerIdServerIdRouteHandler: RouteHandler<
  typeof postSharingGroupsRemoveServerSharingGroupServerIdServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
