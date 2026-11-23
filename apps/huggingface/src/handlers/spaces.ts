import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpacesNamespaceRepoResolveRevPathRoute } from '../routes'

const app = new OpenAPIHono()

export const spacesHandler = app.openapi(getSpacesNamespaceRepoResolveRevPathRoute, (c) => {
  throw new Error('Not implemented')
})
