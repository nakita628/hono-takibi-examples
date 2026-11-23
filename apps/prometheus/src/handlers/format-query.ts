import { OpenAPIHono } from '@hono/zod-openapi'
import { getFormatQueryRoute, postFormatQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const formatQueryHandler = app
  .openapi(getFormatQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFormatQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
