import { OpenAPIHono } from '@hono/zod-openapi'
import { patchEmbeddedDiscriminatorRoute } from '../routes'

const app = new OpenAPIHono()

export const embeddedDiscriminatorHandler = app.openapi(patchEmbeddedDiscriminatorRoute, (c) => {
  throw new Error('Not implemented')
})
