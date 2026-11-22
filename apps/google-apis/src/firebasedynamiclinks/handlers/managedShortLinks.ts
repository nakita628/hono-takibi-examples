import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ManagedShortLinksCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const managedShortLinksHandler = app.openapi(postV1ManagedShortLinksCreateRoute, (c) => {
  throw new Error('Not implemented')
})
