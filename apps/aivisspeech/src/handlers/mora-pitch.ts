import { OpenAPIHono } from '@hono/zod-openapi'
import { postMoraPitchRoute } from '../routes'

const app = new OpenAPIHono()

export const moraPitchHandler = app.openapi(postMoraPitchRoute, (c) => {
  throw new Error('Not implemented')
})
