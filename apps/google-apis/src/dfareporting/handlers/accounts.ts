import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdAccountsIdRoute,
  getUserprofilesProfileIdAccountsRoute,
  patchUserprofilesProfileIdAccountsRoute,
  putUserprofilesProfileIdAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getUserprofilesProfileIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
