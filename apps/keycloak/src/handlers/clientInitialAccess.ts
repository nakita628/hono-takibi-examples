import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmClientsInitialAccessIdRoute,
  getAdminRealmsRealmClientsInitialAccessRoute,
  postAdminRealmsRealmClientsInitialAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientInitialAccessHandler = app
  .openapi(getAdminRealmsRealmClientsInitialAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsInitialAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsInitialAccessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
