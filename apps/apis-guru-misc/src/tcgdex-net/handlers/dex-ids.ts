import { OpenAPIHono } from '@hono/zod-openapi'
import { getDexIdsDexIdRoute, getDexIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const dexIdsHandler = app
  .openapi(getDexIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDexIdsDexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
