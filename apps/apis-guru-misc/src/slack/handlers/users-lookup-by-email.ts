import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersLookupByEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const usersLookupByEmailHandler = app.openapi(getUsersLookupByEmailRoute, (c) => {
  throw new Error('Not implemented')
})
