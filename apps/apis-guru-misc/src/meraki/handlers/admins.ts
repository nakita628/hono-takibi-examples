import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdAdminsAdminIdRoute,
  getOrganizationsOrganizationIdAdminsRoute,
  postOrganizationsOrganizationIdAdminsRoute,
  putOrganizationsOrganizationIdAdminsAdminIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminsHandler = app
  .openapi(getOrganizationsOrganizationIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
