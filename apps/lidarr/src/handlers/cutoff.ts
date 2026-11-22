import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1WantedCutoffIdRoute, getApiV1WantedCutoffRoute } from '../routes'

const app = new OpenAPIHono()

export const cutoffHandler = app
  .openapi(getApiV1WantedCutoffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WantedCutoffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
