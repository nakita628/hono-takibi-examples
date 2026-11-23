import { OpenAPIHono } from '@hono/zod-openapi'
import { postConnectWavesRoute } from '../routes'

const app = new OpenAPIHono()

export const connectWavesHandler = app.openapi(postConnectWavesRoute, (c) => {
  throw new Error('Not implemented')
})
