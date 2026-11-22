import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersApplicationsetsApplicationSetIdRoute,
  deleteUsersApplicationsetsApplicationSetIdRoute,
  getProvidersProviderIdApplicationsetsRoute,
  getUsersUserIdApplicationsetsRoute,
  postProvidersProviderIdApplicationsetsRoute,
  postUsersUserIdApplicationsetsRoute,
  putProvidersApplicationsetsApplicationSetIdRoute,
  putUsersApplicationsetsApplicationSetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsetsHandler = app
  .openapi(deleteProvidersApplicationsetsApplicationSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersApplicationsetsApplicationSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdApplicationsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersProviderIdApplicationsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersApplicationsetsApplicationSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersApplicationsetsApplicationSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdApplicationsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdApplicationsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
