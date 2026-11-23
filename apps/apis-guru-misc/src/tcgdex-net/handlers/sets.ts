import { OpenAPIHono } from '@hono/zod-openapi'
import { getSetsRoute, getSetsSetCardLocalIdRoute, getSetsSetRoute } from '../routes'

const app = new OpenAPIHono()

export const setsHandler = app
  .openapi(getSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetsSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetsSetCardLocalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
