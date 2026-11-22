import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2SatisfactionReasonsRoute,
  getApiV2SatisfactionReasonsSatisfactionReasonIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const satisfactionReasonsHandler = app
  .openapi(getApiV2SatisfactionReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SatisfactionReasonsSatisfactionReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
