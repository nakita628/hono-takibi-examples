import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersApplicationsetsApplicationSetIdRoute,
  getUsersInitiatedworkflowsRoute,
  getUsersIntegrationsRoute,
  getUsersUserIdApplicationsetsRoute,
  getUsersUserIdYourcampusurlRoute,
  postUsersUserIdApplicationsetsRoute,
  putUsersApplicationsetsApplicationSetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(deleteUsersApplicationsetsApplicationSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersApplicationsetsApplicationSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersInitiatedworkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdApplicationsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdApplicationsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdYourcampusurlRoute, (c) => {
    throw new Error('Not implemented')
  })
