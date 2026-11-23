import { OpenAPIHono } from '@hono/zod-openapi'
import { getEncodingUtf8Route } from '../routes'

const app = new OpenAPIHono()

export const encodingHandler = app.openapi(getEncodingUtf8Route, (c) => {
  throw new Error('Not implemented')
})
