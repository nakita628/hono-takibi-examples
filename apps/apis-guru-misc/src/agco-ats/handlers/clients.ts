import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ClientsIDAvailableUpdateGroupSubscriptionsRoute,
  getApiV2ClientsIDRoute,
  getApiV2ClientsIDUpdateGroupSubscriptionsRoute,
  getApiV2ClientsRoute,
  putApiV2ClientsIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(getApiV2ClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClientsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ClientsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClientsIDAvailableUpdateGroupSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClientsIDUpdateGroupSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
