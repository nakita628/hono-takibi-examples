import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiTraitsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const traitsHandler = app.openapi(getApiTraitsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
