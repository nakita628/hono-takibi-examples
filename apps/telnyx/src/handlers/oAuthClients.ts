import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOauthClientsId2Route,
  deleteOauthClientsIdRoute,
  getOauthClients2Route,
  getOauthClientsId2Route,
  getOauthClientsIdRoute,
  getOauthClientsRoute,
  postOauthClients2Route,
  postOauthClientsRoute,
  putOauthClientsId2Route,
  putOauthClientsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthClientsHandler = app
  .openapi(getOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauthClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOauthClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthClients2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthClients2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauthClientsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthClientsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOauthClientsId2Route, (c) => {
    throw new Error('Not implemented')
  })
