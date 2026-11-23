import { OpenAPIHono } from '@hono/zod-openapi'
import { getElementRoute, getElementSearchRoute, postElementSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const elementHandler = app
  .openapi(getElementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElementSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postElementSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
