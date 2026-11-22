import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpHovercardV1UserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const hoverCardHandler = app.openapi(getOcsV2PhpHovercardV1UserIdRoute, (c) => {
  throw new Error('Not implemented')
})
