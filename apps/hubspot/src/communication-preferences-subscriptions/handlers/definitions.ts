import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommunicationPreferences202609DefinitionsRoute,
  postCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute,
} from '../routes'

const app = new OpenAPIHono()

export const definitionsHandler = app
  .openapi(getCommunicationPreferences202609DefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
