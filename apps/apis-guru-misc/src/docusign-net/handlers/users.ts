import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdUsersRoute,
  deleteV21AccountsAccountIdUsersUserIdProfileImageRoute,
  getV21AccountsAccountIdUsersRoute,
  getV21AccountsAccountIdUsersUserIdProfileImageRoute,
  getV21AccountsAccountIdUsersUserIdRoute,
  getV21AccountsAccountIdUsersUserIdSettingsRoute,
  postV21AccountsAccountIdUsersRoute,
  putV21AccountsAccountIdUsersRoute,
  putV21AccountsAccountIdUsersUserIdProfileImageRoute,
  putV21AccountsAccountIdUsersUserIdRoute,
  putV21AccountsAccountIdUsersUserIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(deleteV21AccountsAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersUserIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
