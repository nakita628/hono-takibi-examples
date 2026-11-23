import { OpenAPIHono } from '@hono/zod-openapi'
import { getGameExportGameIdRoute } from '../routes'

const app = new OpenAPIHono()

export const gameHandler = app.openapi(getGameExportGameIdRoute, (c) => {
  throw new Error('Not implemented')
})
