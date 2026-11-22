import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpTwofactorStateRoute,
  postOcsV2PhpTwofactorDisableRoute,
  postOcsV2PhpTwofactorEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const twoFactorApiHandler = app
  .openapi(getOcsV2PhpTwofactorStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTwofactorEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTwofactorDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
