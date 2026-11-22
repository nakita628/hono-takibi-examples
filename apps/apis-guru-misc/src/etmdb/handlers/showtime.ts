import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ShowtimeSearchallParamRoute } from '../routes'

const app = new OpenAPIHono()

export const showtimeHandler = app.openapi(getApiV1ShowtimeSearchallParamRoute, (c) => {
  throw new Error('Not implemented')
})
