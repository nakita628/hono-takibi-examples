import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdMembersUserIdRoute,
  deleteV1ProductsProductIdMembersUserIdRoute,
  getV1OrganizationsOrganizationIdMembersRoute,
  getV1ProductsProductIdMembersRoute,
  postV1OrganizationsOrganizationIdMembersUserIdRoute,
  postV1ProductsProductIdMembersInviteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(getV1OrganizationsOrganizationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdMembersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsProductIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
