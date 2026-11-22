import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkspaceSlugActivityTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const activityTypesHandler = app.openapi(getWorkspaceSlugActivityTypesRoute, (c) => {
  throw new Error('Not implemented')
})
