import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticStandingOrderConsentsConsentIdRoute,
  postDomesticStandingOrderConsentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domesticStandingOrderConsentsHandler = app
  .openapi(postDomesticStandingOrderConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticStandingOrderConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
