import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadRoute,
  getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateRoute,
  getOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute,
  postOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute,
  putOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute,
  putOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateRoute, (c) => {
    throw new Error('Not implemented')
  })
