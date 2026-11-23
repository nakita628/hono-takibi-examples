import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommunicationPreferences202609DefinitionsRoute,
  getCommunicationPreferences202609StatusesSubscriberIdStringRoute,
  getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute,
  postCommunicationPreferences202609LinksGenerateRoute,
  postCommunicationPreferences202609StatusesBatchReadRoute,
  postCommunicationPreferences202609StatusesBatchUnsubscribeAllReadRoute,
  postCommunicationPreferences202609StatusesBatchUnsubscribeAllRoute,
  postCommunicationPreferences202609StatusesBatchWriteRoute,
  postCommunicationPreferences202609StatusesSubscriberIdStringRoute,
  postCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute,
} from './routes'
import {
  getCommunicationPreferences202609DefinitionsRouteHandler,
  getCommunicationPreferences202609StatusesSubscriberIdStringRouteHandler,
  getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRouteHandler,
  postCommunicationPreferences202609LinksGenerateRouteHandler,
  postCommunicationPreferences202609StatusesBatchReadRouteHandler,
  postCommunicationPreferences202609StatusesBatchUnsubscribeAllReadRouteHandler,
  postCommunicationPreferences202609StatusesBatchUnsubscribeAllRouteHandler,
  postCommunicationPreferences202609StatusesBatchWriteRouteHandler,
  postCommunicationPreferences202609StatusesSubscriberIdStringRouteHandler,
  postCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCommunicationPreferences202609DefinitionsRoute,
    getCommunicationPreferences202609DefinitionsRouteHandler,
  )
  .openapi(
    postCommunicationPreferences202609LinksGenerateRoute,
    postCommunicationPreferences202609LinksGenerateRouteHandler,
  )
  .openapi(
    postCommunicationPreferences202609StatusesBatchReadRoute,
    postCommunicationPreferences202609StatusesBatchReadRouteHandler,
  )
  .openapi(
    postCommunicationPreferences202609StatusesBatchUnsubscribeAllRoute,
    postCommunicationPreferences202609StatusesBatchUnsubscribeAllRouteHandler,
  )
  .openapi(
    postCommunicationPreferences202609StatusesBatchUnsubscribeAllReadRoute,
    postCommunicationPreferences202609StatusesBatchUnsubscribeAllReadRouteHandler,
  )
  .openapi(
    postCommunicationPreferences202609StatusesBatchWriteRoute,
    postCommunicationPreferences202609StatusesBatchWriteRouteHandler,
  )
  .openapi(
    getCommunicationPreferences202609StatusesSubscriberIdStringRoute,
    getCommunicationPreferences202609StatusesSubscriberIdStringRouteHandler,
  )
  .openapi(
    postCommunicationPreferences202609StatusesSubscriberIdStringRoute,
    postCommunicationPreferences202609StatusesSubscriberIdStringRouteHandler,
  )
  .openapi(
    getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute,
    getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRouteHandler,
  )
  .openapi(
    postCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute,
    postCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRouteHandler,
  )

export default app
