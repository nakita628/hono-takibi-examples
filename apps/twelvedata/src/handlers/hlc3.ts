import { OpenAPIHono } from '@hono/zod-openapi'
import { getHlc3Route } from '../routes'

const app = new OpenAPIHono()

export const hlc3Handler = app.openapi(getHlc3Route, (c) => {
  throw new Error('Not implemented')
})
