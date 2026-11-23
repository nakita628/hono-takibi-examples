import { OpenAPIHono } from '@hono/zod-openapi'
import { getArtifactsArtifactIdRoute } from '../routes'

const app = new OpenAPIHono()

export const artifactsHandler = app.openapi(getArtifactsArtifactIdRoute, (c) => {
  throw new Error('Not implemented')
})
