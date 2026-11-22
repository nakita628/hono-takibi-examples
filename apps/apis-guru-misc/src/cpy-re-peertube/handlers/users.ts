import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersIdRoute,
  getApiV1UsersIdRoute,
  getApiV1UsersRoute,
  postApiV1UsersAskSendVerifyEmailRoute,
  postApiV1UsersIdTwoFactorConfirmRequestRoute,
  postApiV1UsersIdTwoFactorDisableRoute,
  postApiV1UsersIdTwoFactorRequestRoute,
  postApiV1UsersIdVerifyEmailRoute,
  postApiV1UsersRoute,
  putApiV1UsersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersAskSendVerifyEmailRoute, (c) => {
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
  .openapi(postApiV1UsersIdTwoFactorConfirmRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTwoFactorDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTwoFactorRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
