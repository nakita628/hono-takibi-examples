import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute,
  deleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute,
  getOcsV2PhpAppsDavApiV1EventsUpcomingRoute,
  getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingRoute,
  getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowRoute,
  getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute,
  postOcsV2PhpAppsDavApiV1DirectRoute,
  postOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute,
  postOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute,
  postOcsV2PhpCalendarExportRoute,
  postOcsV2PhpCalendarImportRoute,
  postOcsV2PhpContactsImportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(postOcsV2PhpAppsDavApiV1DirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsDavApiV1EventsUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCalendarExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCalendarImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpContactsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
