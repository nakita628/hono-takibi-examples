import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmIdRoute,
  deleteOrganizationsOrganizationIdGroupsGroupIdRoute,
  getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute,
  getOrganizationsOrganizationIdGroupsGroupIdRoute,
  getOrganizationsOrganizationIdGroupsRoute,
  patchOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute,
  patchOrganizationsOrganizationIdGroupsGroupIdRoute,
  postOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute,
  postOrganizationsOrganizationIdGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(postOrganizationsOrganizationIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
