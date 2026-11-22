import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationProjectsProjectIdApiKeysApiKeyIdRoute,
  deleteOrganizationProjectsProjectIdModelPermissionsRoute,
  deleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute,
  deleteOrganizationProjectsProjectIdUsersUserIdRoute,
  getOrganizationProjectsProjectIdApiKeysApiKeyIdRoute,
  getOrganizationProjectsProjectIdApiKeysRoute,
  getOrganizationProjectsProjectIdModelPermissionsRoute,
  getOrganizationProjectsProjectIdRateLimitsRoute,
  getOrganizationProjectsProjectIdRoute,
  getOrganizationProjectsProjectIdServiceAccountsRoute,
  getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute,
  getOrganizationProjectsProjectIdUsersRoute,
  getOrganizationProjectsProjectIdUsersUserIdRoute,
  getOrganizationProjectsRoute,
  postOrganizationProjectsProjectIdApiKeysApiKeyIdRoute,
  postOrganizationProjectsProjectIdArchiveRoute,
  postOrganizationProjectsProjectIdModelPermissionsRoute,
  postOrganizationProjectsProjectIdRateLimitsRateLimitIdRoute,
  postOrganizationProjectsProjectIdRoute,
  postOrganizationProjectsProjectIdServiceAccountsRoute,
  postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute,
  postOrganizationProjectsProjectIdUsersRoute,
  postOrganizationProjectsProjectIdUsersUserIdRoute,
  postOrganizationProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getOrganizationProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdModelPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdModelPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdModelPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdRateLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdRateLimitsRateLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
