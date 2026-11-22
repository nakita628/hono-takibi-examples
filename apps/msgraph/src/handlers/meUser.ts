import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeRoute, patchMeRoute } from '../routes'

const app = new OpenAPIHono()

export const meUserHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeRoute, (c) => {
    throw new Error('Not implemented')
  })
