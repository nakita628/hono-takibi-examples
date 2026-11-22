import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOauthGrantsId2Route,
  deleteOauthGrantsIdRoute,
  getOauthGrants2Route,
  getOauthGrantsId2Route,
  getOauthGrantsIdRoute,
  getOauthGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthGrantsHandler = app
  .openapi(getOauthGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauthGrantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthGrantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthGrants2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauthGrantsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthGrantsId2Route, (c) => {
    throw new Error('Not implemented')
  })
