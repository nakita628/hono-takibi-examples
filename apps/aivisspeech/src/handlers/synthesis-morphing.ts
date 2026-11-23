import { OpenAPIHono } from '@hono/zod-openapi'
import { postSynthesisMorphingRoute } from '../routes'

const app = new OpenAPIHono()

export const synthesisMorphingHandler = app.openapi(postSynthesisMorphingRoute, (c) => {
  throw new Error('Not implemented')
})
