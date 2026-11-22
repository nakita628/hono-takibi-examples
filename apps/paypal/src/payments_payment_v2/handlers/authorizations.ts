import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2PaymentsAuthorizationsAuthorizationIdRoute,
  postV2PaymentsAuthorizationsAuthorizationIdCaptureRoute,
  postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRoute,
  postV2PaymentsAuthorizationsAuthorizationIdVoidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationsHandler = app
  .openapi(getV2PaymentsAuthorizationsAuthorizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsAuthorizationsAuthorizationIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsAuthorizationsAuthorizationIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
