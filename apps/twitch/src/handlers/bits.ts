import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBitsCheermotesRoute,
  getBitsCustomPowerUpsRoute,
  getBitsExtensionsRoute,
  getBitsLeaderboardRoute,
  putBitsExtensionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bitsHandler = app
  .openapi(getBitsLeaderboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBitsCheermotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBitsCustomPowerUpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBitsExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBitsExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
