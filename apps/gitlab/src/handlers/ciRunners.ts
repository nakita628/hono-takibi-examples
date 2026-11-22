import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4RunnersManagersRoute,
  deleteApiV4RunnersRoute,
  getApiV4RunnersRouterDiscoveryRoute,
  postApiV4RunnersResetAuthenticationTokenRoute,
  postApiV4RunnersRoute,
  postApiV4RunnersVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ciRunnersHandler = app
  .openapi(postApiV4RunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4RunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4RunnersManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4RunnersVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4RunnersResetAuthenticationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4RunnersRouterDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
