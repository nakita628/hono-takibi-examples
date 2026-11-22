import { OpenAPIHono } from '@hono/zod-openapi'
import { getMePeoplePersonIdRoute, getMePeopleRoute } from '../routes'

const app = new OpenAPIHono()

export const mePersonHandler = app
  .openapi(getMePeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePeoplePersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
