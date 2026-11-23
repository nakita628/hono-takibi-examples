import { OpenAPIHono } from '@hono/zod-openapi'
import { getLog10Route } from '../routes'

const app = new OpenAPIHono()

export const log10Handler = app.openapi(getLog10Route, (c) => {
  throw new Error('Not implemented')
})
