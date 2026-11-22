import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDoctorsIdRoute,
  getApiDoctorsRoute,
  getApiUserGroupsIdRoute,
  getApiUserGroupsRoute,
  getApiUsersIdRoute,
  getApiUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const administrativeHandler = app
  .openapi(getApiDoctorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDoctorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
