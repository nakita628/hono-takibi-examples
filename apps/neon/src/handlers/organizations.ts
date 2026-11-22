import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrgIdApiKeysKeyIdRoute,
  deleteOrganizationsOrgIdMembersMemberIdRoute,
  deleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute,
  getOrganizationsOrgIdApiKeysRoute,
  getOrganizationsOrgIdInvitationsRoute,
  getOrganizationsOrgIdMembersMemberIdRoute,
  getOrganizationsOrgIdMembersRoute,
  getOrganizationsOrgIdRoute,
  getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsRoute,
  getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute,
  patchOrganizationsOrgIdMembersMemberIdRoute,
  postOrganizationsOrgIdApiKeysRoute,
  postOrganizationsOrgIdInvitationsRoute,
  postOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrgIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrgIdApiKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrgIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrgIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrgIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
