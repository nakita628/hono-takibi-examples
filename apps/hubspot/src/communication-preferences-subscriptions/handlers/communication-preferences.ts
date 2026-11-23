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
} from '../routes'

const app = new OpenAPIHono()

export const communicationPreferencesHandler = app
  .openapi(getCommunicationPreferences202609DefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationPreferences202609LinksGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationPreferences202609StatusesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationPreferences202609StatusesBatchUnsubscribeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationPreferences202609StatusesBatchUnsubscribeAllReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationPreferences202609StatusesBatchWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationPreferences202609StatusesSubscriberIdStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationPreferences202609StatusesSubscriberIdStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
