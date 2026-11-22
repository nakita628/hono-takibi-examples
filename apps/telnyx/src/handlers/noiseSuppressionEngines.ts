import { OpenAPIHono } from '@hono/zod-openapi'
import { getNoiseSuppressionEnginesRoute } from '../routes'

const app = new OpenAPIHono()

export const noiseSuppressionEnginesHandler = app.openapi(getNoiseSuppressionEnginesRoute, (c) => {
  throw new Error('Not implemented')
})
