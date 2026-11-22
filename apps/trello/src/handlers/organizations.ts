import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsIdLogoRoute,
  deleteOrganizationsIdMembersIdMemberAllRoute,
  deleteOrganizationsIdMembersIdMemberRoute,
  deleteOrganizationsIdPrefsAssociatedDomainRoute,
  deleteOrganizationsIdPrefsOrgInviteRestrictRoute,
  deleteOrganizationsIdRoute,
  deleteOrganizationsIdTagsIdTagRoute,
  getOrganizationsIdActionsRoute,
  getOrganizationsIdBoardsRoute,
  getOrganizationsIdExportsRoute,
  getOrganizationsIdFieldRoute,
  getOrganizationsIdMembershipsIdMembershipRoute,
  getOrganizationsIdMembershipsRoute,
  getOrganizationsIdMembersRoute,
  getOrganizationsIdNewBillableGuestsIdBoardRoute,
  getOrganizationsIdPluginDataRoute,
  getOrganizationsIdRoute,
  getOrganizationsIdTagsRoute,
  postOrganizationsIdExportsRoute,
  postOrganizationsIdLogoRoute,
  postOrganizationsIdTagsRoute,
  postOrganizationsRoute,
  putOrganizationsIdMembersIdMemberDeactivatedRoute,
  putOrganizationsIdMembersIdMemberRoute,
  putOrganizationsIdMembersRoute,
  putOrganizationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdMembershipsIdMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdPluginDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdMembersIdMemberDeactivatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdMembersIdMemberAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdPrefsAssociatedDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdPrefsOrgInviteRestrictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdTagsIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdNewBillableGuestsIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
