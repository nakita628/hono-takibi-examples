import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlatformApiV1UsersIdRoute,
  getPlatformApiV1UsersIdLoginRoute,
  getPlatformApiV1UsersIdRoute,
  patchPlatformApiV1UsersIdRoute,
  postPlatformApiV1UsersIdTokenRoute,
  postPlatformApiV1UsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postPlatformApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlatformApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlatformApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformApiV1UsersIdLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformApiV1UsersIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
