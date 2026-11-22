import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1UsersUserKeyAliasesAliasRoute,
  deleteAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute,
  deleteAdminDirectoryV1UsersUserKeyRoute,
  getAdminDirectoryV1UsersRoute,
  getAdminDirectoryV1UsersUserKeyAliasesRoute,
  getAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute,
  getAdminDirectoryV1UsersUserKeyRoute,
  patchAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute,
  patchAdminDirectoryV1UsersUserKeyRoute,
  postAdminDirectoryV1UsersRoute,
  postAdminDirectoryV1UsersUserKeyAliasesRoute,
  postAdminDirectoryV1UsersUserKeyAliasesWatchRoute,
  postAdminDirectoryV1UsersUserKeyMakeAdminRoute,
  postAdminDirectoryV1UsersUserKeySignOutRoute,
  postAdminDirectoryV1UsersUserKeyUndeleteRoute,
  postAdminDirectoryV1UsersWatchRoute,
  putAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute,
  putAdminDirectoryV1UsersUserKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getAdminDirectoryV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1UsersUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1UsersUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1UsersUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyAliasesWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1UsersUserKeyAliasesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyMakeAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeySignOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
