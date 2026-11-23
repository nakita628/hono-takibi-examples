import { OpenAPIHono } from '@hono/zod-openapi'
import { getContainersNamespaceRepoResolvePathRoute } from '../routes'

const app = new OpenAPIHono()

export const containersHandler = app.openapi(getContainersNamespaceRepoResolvePathRoute, (c) => {
  throw new Error('Not implemented')
})
