import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdMembersMemberIdRoute,
  getOrganizationsOrganizationIdMembersMemberIdRoute,
  getOrganizationsOrganizationIdMembersRoute,
  postOrganizationsOrganizationIdMembersBatchCreateRoute,
  postOrganizationsOrganizationIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationMembersHandler = app
  .openapi(getOrganizationsOrganizationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdMembersBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
