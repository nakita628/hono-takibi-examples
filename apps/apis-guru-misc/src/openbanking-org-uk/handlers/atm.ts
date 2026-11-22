import { OpenAPIHono } from '@hono/zod-openapi'
import { getAtmsRoute, headAtmsRoute } from '../routes'

const app = new OpenAPIHono()

export const atmHandler = app
  .openapi(getAtmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAtmsRoute, (c) => {
    throw new Error('Not implemented')
  })
