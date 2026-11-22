import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsFederationApiV1SharedSecretRoute,
  getOcsV2PhpCloudSharedSecretRoute,
  postOcsV2PhpAppsFederationApiV1RequestSharedSecretRoute,
  postOcsV2PhpCloudSharedSecretRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsAuthapiHandler = app
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
