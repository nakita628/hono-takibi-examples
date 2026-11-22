import { OpenAPIHono } from '@hono/zod-openapi'
import { getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDRoute } from '../routes'

const app = new OpenAPIHono()

export const spectatorV5Handler = app.openapi(
  getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
