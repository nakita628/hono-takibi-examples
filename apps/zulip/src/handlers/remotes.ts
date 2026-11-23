import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemotesPushE2eeRegisterRoute } from '../routes'

const app = new OpenAPIHono()

export const remotesHandler = app.openapi(postRemotesPushE2eeRegisterRoute, (c) => {
  throw new Error('Not implemented')
})
