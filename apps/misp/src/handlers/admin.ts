import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminOrganisationsDeleteOrganisationIdRoute,
  deleteAdminUsersDeleteUserIdRoute,
  getAdminUsersRoute,
  getAdminUsersViewUserIdRoute,
  postAdminLogsRoute,
  postAdminOrganisationsAddRoute,
  postAdminUsersAddRoute,
  putAdminOrganisationsEditOrganisationIdRoute,
  putAdminUsersEditUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(postAdminUsersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersEditUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersDeleteUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersViewUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrganisationsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminOrganisationsEditOrganisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOrganisationsDeleteOrganisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
