import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdRoute } from '../routes'

const app = new OpenAPIHono()

export const accountActiveAdSummariesHandler = app.openapi(
  getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
