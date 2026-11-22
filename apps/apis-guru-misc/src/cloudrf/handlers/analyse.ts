import { OpenAPIHono } from '@hono/zod-openapi'
import { getInterferenceRoute, getMeshRoute, getNetworkRoute } from '../routes'

const app = new OpenAPIHono()

export const analyseHandler = app
  .openapi(getInterferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
