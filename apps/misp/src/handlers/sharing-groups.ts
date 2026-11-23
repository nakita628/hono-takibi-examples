import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const sharingGroupsHandler = app
  .openapi(postSharingGroupsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharingGroupsEditSharingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharingGroupsDeleteSharingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharingGroupsViewSharingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharingGroupsAddOrgSharingGroupIdOrganisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharingGroupsRemoveOrgSharingGroupIdOrganisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharingGroupsAddServerSharingGroupIdServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharingGroupsRemoveServerSharingGroupServerIdServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
