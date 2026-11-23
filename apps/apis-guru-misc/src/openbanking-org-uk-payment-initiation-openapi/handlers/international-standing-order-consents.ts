import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternationalStandingOrderConsentsConsentIdRoute,
  postInternationalStandingOrderConsentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internationalStandingOrderConsentsHandler = app
  .openapi(postInternationalStandingOrderConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternationalStandingOrderConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
