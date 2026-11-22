import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsFilesSharingApiV1SharesIdRoute,
  getOcsV2PhpAppsFilesSharingApiV1SharesIdRoute,
  getOcsV2PhpAppsFilesSharingApiV1SharesInheritedRoute,
  getOcsV2PhpAppsFilesSharingApiV1SharesPendingRoute,
  getOcsV2PhpAppsFilesSharingApiV1SharesRoute,
  getOcsV2PhpAppsFilesSharingApiV1TokenRoute,
  postOcsV2PhpAppsFilesSharingApiV1SharesIdSendEmailRoute,
  postOcsV2PhpAppsFilesSharingApiV1SharesPendingIdRoute,
  postOcsV2PhpAppsFilesSharingApiV1SharesRoute,
  putOcsV2PhpAppsFilesSharingApiV1SharesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shareapiHandler = app
  .openapi(getOcsV2PhpAppsFilesSharingApiV1SharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesSharingApiV1SharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesSharingApiV1SharesInheritedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesSharingApiV1SharesPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesSharingApiV1SharesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsFilesSharingApiV1SharesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsFilesSharingApiV1SharesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesSharingApiV1SharesIdSendEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesSharingApiV1SharesPendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesSharingApiV1TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
