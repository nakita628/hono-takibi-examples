import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIdNameRoute,
  getRealmUserStorageIdNameRoute,
  postRealmUserStorageIdRemoveImportedUsersRoute,
  postRealmUserStorageIdSyncRoute,
  postRealmUserStorageIdUnlinkUsersRoute,
  postRealmUserStorageParentIdMappersIdSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userStorageProviderHandler = app
  .openapi(getIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUserStorageIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUserStorageIdRemoveImportedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUserStorageIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUserStorageIdUnlinkUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUserStorageParentIdMappersIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
