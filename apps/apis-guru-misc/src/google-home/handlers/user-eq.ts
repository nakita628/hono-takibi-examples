import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserEqSetEqualizerRoute } from '../routes'

const app = new OpenAPIHono()

export const userEqHandler = app.openapi(postUserEqSetEqualizerRoute, (c) => {
  throw new Error('Not implemented')
})
