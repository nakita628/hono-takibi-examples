import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute,
  postGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playersHandler = app
  .openapi(deleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
