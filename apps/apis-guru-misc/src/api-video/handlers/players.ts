import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlayersPlayerIdLogoRoute,
  deletePlayersPlayerIdRoute,
  getPlayersPlayerIdRoute,
  getPlayersRoute,
  patchPlayersPlayerIdRoute,
  postPlayersPlayerIdLogoRoute,
  postPlayersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playersHandler = app
  .openapi(getPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlayersPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlayersPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlayersPlayerIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlayersPlayerIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
