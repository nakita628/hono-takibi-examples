import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute,
  deleteUsersSelectedUserPropertiesAppKeyPropertyNameRoute,
  deleteUsersSelectedUserSshKeysKeyIdRoute,
  getUsersSelectedUserPipelinesConfigVariablesIndexRoute,
  getUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute,
  getUsersSelectedUserPropertiesAppKeyPropertyNameRoute,
  getUsersSelectedUserRoute,
  getUsersSelectedUserSearchCodeRoute,
  getUsersSelectedUserSshKeysKeyIdRoute,
  getUsersSelectedUserSshKeysRoute,
  postUsersSelectedUserPipelinesConfigVariablesIndexRoute,
  postUsersSelectedUserSshKeysRoute,
  putUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute,
  putUsersSelectedUserPropertiesAppKeyPropertyNameRoute,
  putUsersSelectedUserSshKeysKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserPipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSelectedUserPipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersSelectedUserPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersSelectedUserPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersSelectedUserPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserSearchCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSelectedUserSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersSelectedUserSshKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserSshKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersSelectedUserSshKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
