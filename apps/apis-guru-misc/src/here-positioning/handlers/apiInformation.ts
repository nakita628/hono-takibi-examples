import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthRoute, getVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const apiInformationHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
