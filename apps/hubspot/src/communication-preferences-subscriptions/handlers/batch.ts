import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCommunicationPreferences202609StatusesBatchReadRoute,
  postCommunicationPreferences202609StatusesBatchUnsubscribeAllReadRoute,
  postCommunicationPreferences202609StatusesBatchUnsubscribeAllRoute,
  postCommunicationPreferences202609StatusesBatchWriteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
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
