import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAlertServiceTransportCodeIdRoute,
  getApiAlertServiceTransportCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertServiceTransportCodeHandler = app
  .openapi(getApiAlertServiceTransportCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertServiceTransportCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
