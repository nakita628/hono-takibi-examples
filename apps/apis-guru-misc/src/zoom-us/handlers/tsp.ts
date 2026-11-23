import { OpenAPIHono } from '@hono/zod-openapi'
import { getTspRoute, patchTspRoute } from '../routes'

const app = new OpenAPIHono()

export const tspHandler = app
  .openapi(getTspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTspRoute, (c) => {
    throw new Error('Not implemented')
  })
