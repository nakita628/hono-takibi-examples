import { OpenAPIHono } from '@hono/zod-openapi'
import { postSingFrameF0Route } from '../routes'

const app = new OpenAPIHono()

export const singFrameF0Handler = app.openapi(postSingFrameF0Route, (c) => {
  throw new Error('Not implemented')
})
