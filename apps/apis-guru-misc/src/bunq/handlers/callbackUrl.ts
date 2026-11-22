import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDOauthClientOauthClientIDCallbackUrlItemIdRoute,
  getUserUserIDOauthClientOauthClientIDCallbackUrlItemIdRoute,
  getUserUserIDOauthClientOauthClientIDCallbackUrlRoute,
  postUserUserIDOauthClientOauthClientIDCallbackUrlRoute,
  putUserUserIDOauthClientOauthClientIDCallbackUrlItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callbackUrlHandler = app
  .openapi(getUserUserIDOauthClientOauthClientIDCallbackUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDOauthClientOauthClientIDCallbackUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDOauthClientOauthClientIDCallbackUrlItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDOauthClientOauthClientIDCallbackUrlItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDOauthClientOauthClientIDCallbackUrlItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
