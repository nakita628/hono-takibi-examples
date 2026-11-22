import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MspsMspIdStatsLicensesRoute, getApiV1MspsMspIdStatsOrgsRoute } from '../routes'

const app = new OpenAPIHono()

export const mspsStatsHandler = app
  .openapi(getApiV1MspsMspIdStatsLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdStatsOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
