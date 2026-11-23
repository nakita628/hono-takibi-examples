import { OpenAPIHono } from '@hono/zod-openapi'
import { getXpackRoute, getXpackUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const xpackHandler = app
  .openapi(getXpackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getXpackUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
