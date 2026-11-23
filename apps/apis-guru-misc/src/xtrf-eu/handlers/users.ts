import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersMeRoute,
  getUsersMeTimeZoneRoute,
  getUsersRoute,
  getUsersUserIdCustomFieldsCustomFieldKeyRoute,
  getUsersUserIdCustomFieldsRoute,
  getUsersUserIdRoute,
  putUsersUserIdCustomFieldsCustomFieldKeyRoute,
  putUsersUserIdCustomFieldsRoute,
  putUsersUserIdPasswordRoute,
  putUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeTimeZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCustomFieldsCustomFieldKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdCustomFieldsCustomFieldKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
