import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiIndexRoute, getApiStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app
  .openapi(getApiStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
