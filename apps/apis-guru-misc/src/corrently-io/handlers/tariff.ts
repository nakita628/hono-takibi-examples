import { OpenAPIHono } from '@hono/zod-openapi'
import { getTariffComponentsRoute, getTariffSlph0Route } from '../routes'

const app = new OpenAPIHono()

export const tariffHandler = app
  .openapi(getTariffComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTariffSlph0Route, (c) => {
    throw new Error('Not implemented')
  })
