import { OpenAPIHono } from '@hono/zod-openapi'
import { getRetreatsRetreatRoute, getRetreatsRoute } from '../routes'

const app = new OpenAPIHono()

export const retreatsHandler = app
  .openapi(getRetreatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetreatsRetreatRoute, (c) => {
    throw new Error('Not implemented')
  })
