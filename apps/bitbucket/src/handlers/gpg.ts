import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersSelectedUserGpgKeysFingerprintRoute,
  getUsersSelectedUserGpgKeysFingerprintRoute,
  getUsersSelectedUserGpgKeysRoute,
  postUsersSelectedUserGpgKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gpgHandler = app
  .openapi(getUsersSelectedUserGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSelectedUserGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersSelectedUserGpgKeysFingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserGpgKeysFingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
