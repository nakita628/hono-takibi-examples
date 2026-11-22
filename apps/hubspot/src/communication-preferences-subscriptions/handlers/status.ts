import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommunicationPreferences202609StatusesSubscriberIdStringRoute,
  getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute,
  postCommunicationPreferences202609LinksGenerateRoute,
  postCommunicationPreferences202609StatusesSubscriberIdStringRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app
  .openapi(postCommunicationPreferences202609LinksGenerateRoute, (c) => {
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
