import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdRoute,
  deleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingIdRoute,
  getOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdRoute,
  getOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingRoute,
  getOcsV2PhpAppsFilesSharingApiV1RemoteSharesRoute,
  postOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remoteHandler = app
  .openapi(getOcsV2PhpAppsFilesSharingApiV1RemoteSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
