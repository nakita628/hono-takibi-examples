import { OpenAPIHono } from '@hono/zod-openapi'
import { postArtifactUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const artifactHandler = app.openapi(postArtifactUploadRoute, (c) => {
  throw new Error('Not implemented')
})
