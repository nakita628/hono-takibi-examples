import { OpenAPIHono } from '@hono/zod-openapi'
import { getMastersPgnGameIdRoute, getMastersRoute } from '../routes'

const app = new OpenAPIHono()

export const mastersHandler = app
  .openapi(getMastersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMastersPgnGameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
