import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeRoute, getUsersUserIdRoute, patchMeRoute, patchUsersUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const usersEssentialsHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
