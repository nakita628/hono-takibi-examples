import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationUsersUserIdRoute,
  getOrganizationUsersRoute,
  getOrganizationUsersUserIdRoute,
  postOrganizationUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getOrganizationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
