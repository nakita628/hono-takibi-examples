import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeNwsfeedRoute } from '../routes'

const app = new OpenAPIHono()

export const typeNwsfeedHandler = app.openapi(getRepositorySearchTypeNwsfeedRoute, (c) => {
  throw new Error('Not implemented')
})
