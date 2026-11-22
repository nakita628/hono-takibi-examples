import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1EavAttributeSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const eavAttributeSetsHandler = app.openapi(postV1EavAttributeSetsRoute, (c) => {
  throw new Error('Not implemented')
})
