import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTftSummonerV1SummonersByPuuidEncryptedPUUIDRoute,
  getTftSummonerV1SummonersMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tftSummonerV1Handler = app
  .openapi(getTftSummonerV1SummonersByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftSummonerV1SummonersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
