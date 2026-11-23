import { OpenAPIHono } from '@hono/zod-openapi'
import { getInfoTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const infoHandler = app.openapi(getInfoTargetRoute, (c) => {
  throw new Error('Not implemented')
})
