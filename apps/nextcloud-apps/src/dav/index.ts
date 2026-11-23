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
} from './routes'
import {
  deleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRouteHandler,
  deleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRouteHandler,
  getOcsV2PhpAppsDavApiV1EventsUpcomingRouteHandler,
  getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingRouteHandler,
  getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowRouteHandler,
  getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRouteHandler,
  postOcsV2PhpAppsDavApiV1DirectRouteHandler,
  postOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRouteHandler,
  postOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRouteHandler,
  postOcsV2PhpCalendarExportRouteHandler,
  postOcsV2PhpCalendarImportRouteHandler,
  postOcsV2PhpContactsImportRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postOcsV2PhpAppsDavApiV1DirectRoute, postOcsV2PhpAppsDavApiV1DirectRouteHandler)
  .openapi(
    getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingRoute,
    getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute,
    postOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRoute,
    deleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsDavApiV1EventsUpcomingRoute,
    getOcsV2PhpAppsDavApiV1EventsUpcomingRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowRoute,
    getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute,
    getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute,
    postOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute,
    deleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRouteHandler,
  )
  .openapi(postOcsV2PhpCalendarExportRoute, postOcsV2PhpCalendarExportRouteHandler)
  .openapi(postOcsV2PhpCalendarImportRoute, postOcsV2PhpCalendarImportRouteHandler)
  .openapi(postOcsV2PhpContactsImportRoute, postOcsV2PhpContactsImportRouteHandler)

export default app
