import { OpenAPIHono } from '@hono/zod-openapi'
import { getResourcesUserMediaListsIdJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const userMediaListsHandler = app.openapi(getResourcesUserMediaListsIdJsonRoute, (c) => {
  throw new Error('Not implemented')
})
