import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersSelectedUserSshKeysKeyIdRoute,
  getUsersSelectedUserSshKeysKeyIdRoute,
  getUsersSelectedUserSshKeysRoute,
  postUsersSelectedUserSshKeysRoute,
  putUsersSelectedUserSshKeysKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sshHandler = app
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
