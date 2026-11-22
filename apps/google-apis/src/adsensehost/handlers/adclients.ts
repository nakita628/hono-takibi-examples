import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdclientsAdClientIdRoute, getAdclientsRoute } from '../routes'

const app = new OpenAPIHono()

export const adclientsHandler = app
  .openapi(getAdclientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
