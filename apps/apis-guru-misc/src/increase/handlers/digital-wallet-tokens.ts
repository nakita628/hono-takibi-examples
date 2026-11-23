import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDigitalWalletTokensDigitalWalletTokenIdRoute,
  getDigitalWalletTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const digitalWalletTokensHandler = app
  .openapi(getDigitalWalletTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDigitalWalletTokensDigitalWalletTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
