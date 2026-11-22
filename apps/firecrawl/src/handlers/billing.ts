import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamCreditUsageHistoricalRoute,
  getTeamCreditUsageRoute,
  getTeamTokenUsageHistoricalRoute,
  getTeamTokenUsageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getTeamCreditUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamCreditUsageHistoricalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamTokenUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamTokenUsageHistoricalRoute, (c) => {
    throw new Error('Not implemented')
  })
