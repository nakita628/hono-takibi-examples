import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersRegistrationsRegistrationIdRoute,
  getApiV1UsersRegistrationsRoute,
  postApiV1UsersRegisterRoute,
  postApiV1UsersRegistrationsAskSendVerifyEmailRoute,
  postApiV1UsersRegistrationsRegistrationIdAcceptRoute,
  postApiV1UsersRegistrationsRegistrationIdRejectRoute,
  postApiV1UsersRegistrationsRegistrationIdVerifyEmailRoute,
  postApiV1UsersRegistrationsRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registerHandler = app
  .openapi(postApiV1UsersRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsAskSendVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersRegistrationsRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRegistrationIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRegistrationIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRegistrationIdVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
