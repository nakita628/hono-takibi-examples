import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const banHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
