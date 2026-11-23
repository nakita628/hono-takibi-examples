import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertPowerRoute } from '../routes'

const app = new OpenAPIHono()

export const convertPowerHandler = app.openapi(postConvertPowerRoute, (c) => {
  throw new Error('Not implemented')
})
