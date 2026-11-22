import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1UsersUserIdCredentialsChangePasswordRoute,
  postApiV1UsersUserIdCredentialsChangeRecoveryQuestionRoute,
  postApiV1UsersUserIdCredentialsForgotPasswordRoute,
  putApiV1UsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const credentialOperationsHandler = app
  .openapi(putApiV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdCredentialsChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdCredentialsChangeRecoveryQuestionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdCredentialsForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
