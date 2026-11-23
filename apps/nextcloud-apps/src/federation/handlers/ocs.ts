import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsFederationTrustedServersIdRoute,
  getOcsV2PhpAppsFederationApiV1SharedSecretRoute,
  getOcsV2PhpAppsFederationTrustedServersRoute,
  getOcsV2PhpCloudSharedSecretRoute,
  postOcsV2PhpAppsFederationApiV1RequestSharedSecretRoute,
  postOcsV2PhpAppsFederationTrustedServersRoute,
  postOcsV2PhpCloudSharedSecretRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(getOcsV2PhpAppsFederationApiV1SharedSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFederationApiV1RequestSharedSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudSharedSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudSharedSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFederationTrustedServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFederationTrustedServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsFederationTrustedServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
