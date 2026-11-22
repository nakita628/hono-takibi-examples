import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersIdSavedSearchesRoute } from '../routes'

const app = new OpenAPIHono()

export const savedSearchesHandler = app.openapi(getUsersIdSavedSearchesRoute, (c) => {
  throw new Error('Not implemented')
})
