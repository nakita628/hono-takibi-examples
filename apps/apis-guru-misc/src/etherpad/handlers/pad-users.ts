import { OpenAPIHono } from '@hono/zod-openapi'
import { getPadUsersRoute, postPadUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const padUsersHandler = app
  .openapi(getPadUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPadUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
