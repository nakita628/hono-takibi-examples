import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnpackRoute } from '../routes'

const app = new OpenAPIHono()

export const unpackHandler = app.openapi(postUnpackRoute, (c) => {
  throw new Error('Not implemented')
})
