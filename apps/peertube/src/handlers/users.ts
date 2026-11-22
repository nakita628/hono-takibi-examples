import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersIdRoute,
  getApiV1UsersIdRoute,
  getApiV1UsersRoute,
  postApiV1UsersAskResetPasswordRoute,
  postApiV1UsersAskSendVerifyEmailRoute,
  postApiV1UsersIdBlockRoute,
  postApiV1UsersIdResetPasswordRoute,
  postApiV1UsersIdTwoFactorConfirmRequestRoute,
  postApiV1UsersIdTwoFactorDisableRoute,
  postApiV1UsersIdTwoFactorRequestRoute,
  postApiV1UsersIdUnblockRoute,
  postApiV1UsersIdVerifyEmailRoute,
  postApiV1UsersRoute,
  putApiV1UsersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdUnblockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersAskSendVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersAskResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTwoFactorRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTwoFactorConfirmRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTwoFactorDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
