import { OpenAPIHono } from '@hono/zod-openapi'
import { getFormatPlayByPlayDeltaDateMinutesRoute, getFormatPlayByPlayGameidRoute } from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatPlayByPlayGameidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayByPlayDeltaDateMinutesRoute, (c) => {
    throw new Error('Not implemented')
  })
