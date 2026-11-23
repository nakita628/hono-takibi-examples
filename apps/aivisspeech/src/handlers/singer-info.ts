import { OpenAPIHono } from '@hono/zod-openapi'
import { getSingerInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const singerInfoHandler = app.openapi(getSingerInfoRoute, (c) => {
  throw new Error('Not implemented')
})
