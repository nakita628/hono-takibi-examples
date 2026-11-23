import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminBadgesIdJsonRoute,
  deleteAdminGroupsIdJsonRoute,
  deleteAdminUsersIdJsonRoute,
  getAdminBackupsFilenameRoute,
  getAdminBackupsJsonRoute,
  getAdminBadgesJsonRoute,
  getAdminUsersIdJsonRoute,
  getAdminUsersJsonRoute,
  getAdminUsersListFlagJsonRoute,
  postAdminBackupsJsonRoute,
  postAdminBadgesJsonRoute,
  postAdminGroupsJsonRoute,
  postAdminUsersIdLogOutJsonRoute,
  postAdminUsersIdMergeJsonRoute,
  putAdminBackupsFilenameRoute,
  putAdminBadgesIdJsonRoute,
  putAdminUsersIdActivateJsonRoute,
  putAdminUsersIdAnonymizeJsonRoute,
  putAdminUsersIdDeactivateJsonRoute,
  putAdminUsersIdSilenceJsonRoute,
  putAdminUsersIdSuspendJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminBackupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminBackupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminBackupsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminBackupsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminBadgesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminBadgesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminBadgesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminBadgesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminGroupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminGroupsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdActivateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdDeactivateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdSuspendJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdSilenceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdAnonymizeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdMergeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdLogOutJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersListFlagJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
