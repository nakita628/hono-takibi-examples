import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminDirectoryV1UsersUserKeyVerificationCodesRoute,
  postAdminDirectoryV1UsersUserKeyVerificationCodesGenerateRoute,
  postAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verificationCodesHandler = app
  .openapi(getAdminDirectoryV1UsersUserKeyVerificationCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyVerificationCodesGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
