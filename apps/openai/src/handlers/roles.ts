import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationRolesRoleIdRoute,
  deleteProjectsProjectIdRolesRoleIdRoute,
  getOrganizationRolesRoleIdRoute,
  getOrganizationRolesRoute,
  getProjectsProjectIdRolesRoleIdRoute,
  getProjectsProjectIdRolesRoute,
  postOrganizationRolesRoleIdRoute,
  postOrganizationRolesRoute,
  postProjectsProjectIdRolesRoleIdRoute,
  postProjectsProjectIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getOrganizationRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
