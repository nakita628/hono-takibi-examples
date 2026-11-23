import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUnregisterRoute,
  getUserAccessTokensRoute,
  getUserRoute,
  postUserLogoutRoute,
  postUserRegisterRoute,
  postUserSamlLoginRoute,
  putUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSamlLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
