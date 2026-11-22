import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute,
  getApiV1OrganizationsOrganizationIdRolesRoute,
  getApiV1OrganizationsOrganizationIdUsersRoute,
  getApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute,
  getApiV1RolesRoute,
  getApiV1UserOrganizationsRoute,
  getApiV1UsersRoute,
  getApiV1UsersUsernameRoute,
  postAccountPasswordRoute,
  postAccountRegistrationRoute,
  postAccountVerificationRoute,
  postApiV1OrganizationsOrganizationIdUsersInviteRoute,
  postApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute,
  postLoginRoute,
  putAccountPasswordRoute,
  putAccountRegistrationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(postAccountPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsOrganizationIdUsersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UserOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
