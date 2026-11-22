import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysIdRoute,
  deleteUserApiKeysIdRoute,
  getProjectsIdApiKeysRoute,
  getUserApiKeysRoute,
  postProjectsIdApiKeysRoute,
  postUserApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(deleteApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
