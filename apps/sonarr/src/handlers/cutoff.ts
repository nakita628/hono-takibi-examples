import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3WantedCutoffIdRoute, getApiV3WantedCutoffRoute } from '../routes'

const app = new OpenAPIHono()

export const cutoffHandler = app
  .openapi(getApiV3WantedCutoffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3WantedCutoffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
