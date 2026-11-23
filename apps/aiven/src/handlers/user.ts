import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIdRoute,
  getUserCreditCodeCreditCodeRoute,
  postUserPasswordResetRequestRoute,
  postUserPasswordResetVerificationCodeRoute,
  postUserPasswordStrengthRoute,
  postUserVerifyEmailVerificationCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(postUserPasswordStrengthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPasswordResetVerificationCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPasswordResetRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserVerifyEmailVerificationCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCreditCodeCreditCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
