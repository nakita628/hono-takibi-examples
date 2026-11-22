import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05UsersAuthNotifyRoute,
  postV05UsersAuthOnConfirmRoute,
  postV05UsersAuthOnFetchModesRoute,
  postV05UsersAuthOnInitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAuthHandler = app
  .openapi(postV05UsersAuthNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthOnConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthOnFetchModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthOnInitRoute, (c) => {
    throw new Error('Not implemented')
  })
