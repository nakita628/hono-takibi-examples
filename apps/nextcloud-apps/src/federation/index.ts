import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsFederationTrustedServersIdRoute,
  getOcsV2PhpAppsFederationApiV1SharedSecretRoute,
  getOcsV2PhpAppsFederationTrustedServersRoute,
  getOcsV2PhpCloudSharedSecretRoute,
  postOcsV2PhpAppsFederationApiV1RequestSharedSecretRoute,
  postOcsV2PhpAppsFederationTrustedServersRoute,
  postOcsV2PhpCloudSharedSecretRoute,
} from './routes'
import {
  deleteOcsV2PhpAppsFederationTrustedServersIdRouteHandler,
  getOcsV2PhpAppsFederationApiV1SharedSecretRouteHandler,
  getOcsV2PhpAppsFederationTrustedServersRouteHandler,
  getOcsV2PhpCloudSharedSecretRouteHandler,
  postOcsV2PhpAppsFederationApiV1RequestSharedSecretRouteHandler,
  postOcsV2PhpAppsFederationTrustedServersRouteHandler,
  postOcsV2PhpCloudSharedSecretRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getOcsV2PhpAppsFederationApiV1SharedSecretRoute,
    getOcsV2PhpAppsFederationApiV1SharedSecretRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsFederationApiV1RequestSharedSecretRoute,
    postOcsV2PhpAppsFederationApiV1RequestSharedSecretRouteHandler,
  )
  .openapi(getOcsV2PhpCloudSharedSecretRoute, getOcsV2PhpCloudSharedSecretRouteHandler)
  .openapi(postOcsV2PhpCloudSharedSecretRoute, postOcsV2PhpCloudSharedSecretRouteHandler)
  .openapi(
    postOcsV2PhpAppsFederationTrustedServersRoute,
    postOcsV2PhpAppsFederationTrustedServersRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsFederationTrustedServersRoute,
    getOcsV2PhpAppsFederationTrustedServersRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsFederationTrustedServersIdRoute,
    deleteOcsV2PhpAppsFederationTrustedServersIdRouteHandler,
  )

export default app
