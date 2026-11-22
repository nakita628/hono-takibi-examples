import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsSpreedApiApiVersionFileFileIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionPublicshareauthRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesIntegrationHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionFileFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionPublicshareauthRoute, (c) => {
    throw new Error('Not implemented')
  })
