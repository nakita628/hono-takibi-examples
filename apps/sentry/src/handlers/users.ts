import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsIndexRoute, getRoute, getUsersUserIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
