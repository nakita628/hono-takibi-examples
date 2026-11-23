import { OpenAPIHono } from '@hono/zod-openapi'
import { postSamplingTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const samplingTargetsHandler = app.openapi(postSamplingTargetsRoute, (c) => {
  throw new Error('Not implemented')
})
