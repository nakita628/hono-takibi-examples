import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2EstimatefeeBlocksRoute, getApiV2FeestatsBlockIdRoute } from '../routes'

const app = new OpenAPIHono()

export const feesHandler = app
  .openapi(getApiV2EstimatefeeBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FeestatsBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
