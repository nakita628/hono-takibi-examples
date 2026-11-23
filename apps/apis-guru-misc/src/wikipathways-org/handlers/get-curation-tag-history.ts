import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetCurationTagHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const getCurationTagHistoryHandler = app.openapi(getGetCurationTagHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
