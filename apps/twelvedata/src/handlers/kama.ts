import { OpenAPIHono } from '@hono/zod-openapi'
import { getKamaRoute } from '../routes'

const app = new OpenAPIHono()

export const kamaHandler = app.openapi(getKamaRoute, (c) => {
  throw new Error('Not implemented')
})
