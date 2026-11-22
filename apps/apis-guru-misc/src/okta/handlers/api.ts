import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersUserIdSessionsRoute,
  getApiV1UsersMeRoute,
  getApiV1UsersRoute,
  getApiV1UsersUserIdAppLinksRoute,
  getApiV1UsersUserIdGroupsRoute,
  getApiV1UsersUserIdRoute,
  postApiV1UsersUserIdLifecycleResetFactorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUserIdAppLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleResetFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
