import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateAlertsIdRoute,
  getV1PrivateAlertsRoute,
  getV1PrivateAlertsWebhooksExamplesRoute,
  postV1PrivateAlertsDeleteRoute,
  postV1PrivateAlertsRoute,
  postV1PrivateAlertsWebhooksTestsRoute,
  putV1PrivateAlertsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
  .openapi(getV1PrivateAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAlertsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAlertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAlertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAlertsWebhooksExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAlertsWebhooksTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
