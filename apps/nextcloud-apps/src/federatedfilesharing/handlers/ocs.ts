import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOcsV2PhpCloudSharesIdAcceptRoute,
  postOcsV2PhpCloudSharesIdDeclineRoute,
  postOcsV2PhpCloudSharesIdMoveRoute,
  postOcsV2PhpCloudSharesIdPermissionsRoute,
  postOcsV2PhpCloudSharesIdReshareRoute,
  postOcsV2PhpCloudSharesIdRevokeRoute,
  postOcsV2PhpCloudSharesIdUnshareRoute,
  postOcsV2PhpCloudSharesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(postOcsV2PhpCloudSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudSharesIdReshareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudSharesIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudSharesIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudSharesIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudSharesIdUnshareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudSharesIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudSharesIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
