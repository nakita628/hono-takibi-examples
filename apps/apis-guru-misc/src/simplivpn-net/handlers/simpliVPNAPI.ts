import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServersRoute,
  getServerSummariesRoute,
  postDisableUserRoute,
  postEnableUserRoute,
  postLoginRoute,
  postRegisterRoute,
  postUsernameAvailableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simpliVPNAPIHandler = app
  .openapi(postDisableUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnableUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsernameAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
