import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAlertLogStatusCodeIdRoute, getApiAlertLogStatusCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const alertLogStatusCodeHandler = app
  .openapi(getApiAlertLogStatusCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertLogStatusCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
