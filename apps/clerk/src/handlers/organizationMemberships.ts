import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdMembershipsUserIdRoute,
  getOrganizationMembershipsRoute,
  getOrganizationsOrganizationIdMembershipsRoute,
  patchOrganizationsOrganizationIdMembershipsUserIdMetadataRoute,
  patchOrganizationsOrganizationIdMembershipsUserIdRoute,
  postOrganizationsOrganizationIdMembershipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationMembershipsHandler = app
  .openapi(postOrganizationsOrganizationIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdMembershipsUserIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
