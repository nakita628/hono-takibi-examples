import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeRoute, putMePasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
