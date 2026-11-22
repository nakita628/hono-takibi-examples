import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDOauthClientItemIdRoute,
  getUserUserIDOauthClientRoute,
  postUserUserIDOauthClientRoute,
  putUserUserIDOauthClientItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthClientHandler = app
  .openapi(getUserUserIDOauthClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDOauthClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDOauthClientItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDOauthClientItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
