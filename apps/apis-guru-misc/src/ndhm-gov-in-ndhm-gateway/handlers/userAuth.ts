import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05UsersAuthConfirmRoute,
  postV05UsersAuthFetchModesRoute,
  postV05UsersAuthInitRoute,
  postV05UsersAuthNotifyRoute,
  postV05UsersAuthOnConfirmRoute,
  postV05UsersAuthOnFetchModesRoute,
  postV05UsersAuthOnInitRoute,
  postV05UsersAuthOnNotifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAuthHandler = app
  .openapi(postV05UsersAuthConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthFetchModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthInitRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postV05UsersAuthOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
