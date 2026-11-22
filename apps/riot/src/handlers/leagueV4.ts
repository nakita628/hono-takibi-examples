import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLolLeagueV4ChallengerleaguesByQueueQueueRoute,
  getLolLeagueV4EntriesByPuuidEncryptedPUUIDRoute,
  getLolLeagueV4EntriesQueueTierDivisionRoute,
  getLolLeagueV4GrandmasterleaguesByQueueQueueRoute,
  getLolLeagueV4MasterleaguesByQueueQueueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leagueV4Handler = app
  .openapi(getLolLeagueV4ChallengerleaguesByQueueQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolLeagueV4EntriesByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolLeagueV4EntriesQueueTierDivisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolLeagueV4GrandmasterleaguesByQueueQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolLeagueV4MasterleaguesByQueueQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
