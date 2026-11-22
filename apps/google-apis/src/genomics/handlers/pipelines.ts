import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2alpha1PipelinesRunRoute } from '../routes'

const app = new OpenAPIHono()

export const pipelinesHandler = app.openapi(postV2alpha1PipelinesRunRoute, (c) => {
  throw new Error('Not implemented')
})
