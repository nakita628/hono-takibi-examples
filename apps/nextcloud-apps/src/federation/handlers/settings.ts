import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsFederationTrustedServersIdRoute,
  getOcsV2PhpAppsFederationTrustedServersRoute,
  postOcsV2PhpAppsFederationTrustedServersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(postOcsV2PhpAppsFederationTrustedServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFederationTrustedServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsFederationTrustedServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
