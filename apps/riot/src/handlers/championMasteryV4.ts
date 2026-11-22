import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdRoute,
  getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDRoute,
  getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopRoute,
  getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const championMasteryV4Handler = app
  .openapi(getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdRoute,
    (c) => {},
  )
  .openapi(getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
