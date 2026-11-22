import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UserAuthorizedClientsClientClientIdRoute,
  deleteApiV2UserAuthorizedClientsUserAuthorizedClientIdRoute,
  getApiV2UserAuthorizedClientsRoute,
  getApiV2UserAuthorizedClientsUserAuthorizedClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAuthorizedClientsHandler = app
  .openapi(getApiV2UserAuthorizedClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UserAuthorizedClientsClientClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UserAuthorizedClientsUserAuthorizedClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserAuthorizedClientsUserAuthorizedClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
