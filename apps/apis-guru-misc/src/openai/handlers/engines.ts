import { OpenAPIHono } from '@hono/zod-openapi'
import { getEnginesEngineIdRoute, getEnginesRoute, postEnginesEngineIdSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const enginesHandler = app
  .openapi(getEnginesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnginesEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnginesEngineIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
