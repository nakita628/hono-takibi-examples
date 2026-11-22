import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute,
  getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingRoute,
  postOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const federatedCalendarHandler = app
  .openapi(getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
