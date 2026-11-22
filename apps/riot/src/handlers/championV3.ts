import { OpenAPIHono } from '@hono/zod-openapi'
import { getLolPlatformV3ChampionRotationsRoute } from '../routes'

const app = new OpenAPIHono()

export const championV3Handler = app.openapi(getLolPlatformV3ChampionRotationsRoute, (c) => {
  throw new Error('Not implemented')
})
