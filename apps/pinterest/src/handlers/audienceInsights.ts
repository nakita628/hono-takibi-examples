import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdAudienceInsightsRoute,
  getAdAccountsAdAccountIdInsightsAudiencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audienceInsightsHandler = app
  .openapi(getAdAccountsAdAccountIdAudienceInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdInsightsAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
