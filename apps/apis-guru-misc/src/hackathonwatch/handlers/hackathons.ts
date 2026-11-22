import { OpenAPIHono } from '@hono/zod-openapi'
import { getHackathonsComingJsonRoute, getHackathonsIdJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const hackathonsHandler = app
  .openapi(getHackathonsComingJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHackathonsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
