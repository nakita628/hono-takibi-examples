import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamActivityRoute,
  getTeamCreditUsageHistoricalRoute,
  getTeamCreditUsageRoute,
  getTeamQueueStatusRoute,
  getTeamThreatProtectionRoute,
  getTeamTokenUsageHistoricalRoute,
  getTeamTokenUsageRoute,
  putTeamThreatProtectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamHandler = app
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
  .openapi(getTeamQueueStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamThreatProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamThreatProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
