import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLolSummonerV4SummonersByPuuidEncryptedPUUIDRoute,
  getLolSummonerV4SummonersMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const summonerV4Handler = app
  .openapi(getLolSummonerV4SummonersByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolSummonerV4SummonersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
