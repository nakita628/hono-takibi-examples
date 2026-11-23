import { OpenAPIHono } from '@hono/zod-openapi'
import { getInfoEntryRoute, getInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const infoHandler = app
  .openapi(getInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoEntryRoute, (c) => {
    throw new Error('Not implemented')
  })
