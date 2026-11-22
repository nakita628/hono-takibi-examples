import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeChatroomRoute } from '../routes'

const app = new OpenAPIHono()

export const typeChatroomHandler = app.openapi(getRepositorySearchTypeChatroomRoute, (c) => {
  throw new Error('Not implemented')
})
