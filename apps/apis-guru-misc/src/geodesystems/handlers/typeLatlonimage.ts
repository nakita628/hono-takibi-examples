import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeLatlonimageRoute } from '../routes'

const app = new OpenAPIHono()

export const typeLatlonimageHandler = app.openapi(getRepositorySearchTypeLatlonimageRoute, (c) => {
  throw new Error('Not implemented')
})
