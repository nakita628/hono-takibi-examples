import { OpenAPIHono } from '@hono/zod-openapi'
import { getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDRoute } from '../routes'

const app = new OpenAPIHono()

export const spectatorTftV5Handler = app.openapi(
  getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
