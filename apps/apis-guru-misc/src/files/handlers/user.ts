import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserApiKeysRoute,
  getUserGroupsRoute,
  getUserPublicKeysRoute,
  patchUserRoute,
  postUserApiKeysRoute,
  postUserPublicKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(patchUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
