import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UsersIdRoute,
  getApiV2UsersAuthenticationActivityRoute,
  getApiV2UsersIdAuthenticationActivityLatestRoute,
  getApiV2UsersRoute,
  patchApiV2UsersIdPasswordRoute,
  patchApiV2UsersIdRoute,
  postApiV2UsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersAuthenticationActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersIdAuthenticationActivityLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsersIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
