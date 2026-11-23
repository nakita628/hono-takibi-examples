import { OpenAPIHono } from '@hono/zod-openapi'
import { getDiscordRoute, postDiscordRoute } from '../routes'

const app = new OpenAPIHono()

export const discordHandler = app
  .openapi(getDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
