import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdSamlRolesRoute,
  getOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute,
  postOrganizationsOrganizationIdSamlRolesRoute,
  putOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const samlRolesHandler = app
  .openapi(getOrganizationsOrganizationIdSamlRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSamlRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
