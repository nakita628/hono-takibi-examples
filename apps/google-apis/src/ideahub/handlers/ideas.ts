import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1alphaIdeasRoute } from '../routes'

const app = new OpenAPIHono()

export const ideasHandler = app.openapi(getV1alphaIdeasRoute, (c) => {
  throw new Error('Not implemented')
})
