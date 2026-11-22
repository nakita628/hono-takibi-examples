import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1CryptoWalletsAuthenticateRoute,
  postV1CryptoWalletsAuthenticateStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cryptoWalletHandler = app
  .openapi(postV1CryptoWalletsAuthenticateStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CryptoWalletsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
