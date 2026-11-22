import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiMonstersIndexRoute, getApiMonstersRoute } from '../routes'

const app = new OpenAPIHono()

export const monstersHandler = app
  .openapi(getApiMonstersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonstersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
