import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MspsMspIdTicketsCountRoute, getApiV1MspsMspIdTicketsRoute } from '../routes'

const app = new OpenAPIHono()

export const mspsTicketsHandler = app
  .openapi(getApiV1MspsMspIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdTicketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
