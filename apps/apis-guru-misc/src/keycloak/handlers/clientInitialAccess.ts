import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmClientsInitialAccessIdRoute,
  getRealmClientsInitialAccessRoute,
  postRealmClientsInitialAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientInitialAccessHandler = app
  .openapi(getRealmClientsInitialAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsInitialAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsInitialAccessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
