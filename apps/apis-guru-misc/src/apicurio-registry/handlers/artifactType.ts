import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminArtifactTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const artifactTypeHandler = app.openapi(getAdminArtifactTypesRoute, (c) => {
  throw new Error('Not implemented')
})
