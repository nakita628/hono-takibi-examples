import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi1UsersCapabilitiesRoute,
  getApi1UsersMeRoute,
  getApi1UsersRoute,
  putApi1UsersMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApi1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1UsersCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
