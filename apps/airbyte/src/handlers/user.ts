import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1UsersDeleteRoute,
  postV1UsersGetByAuthIdRoute,
  postV1UsersGetByEmailRoute,
  postV1UsersGetOrCreateByAuthIdRoute,
  postV1UsersGetRoute,
  postV1UsersListAccessInfoByWorkspaceIdRoute,
  postV1UsersListByOrganizationIdRoute,
  postV1UsersListInstanceAdminRoute,
  postV1UsersUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(postV1UsersGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersGetByAuthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersGetByEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersGetOrCreateByAuthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersListAccessInfoByWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersListByOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersListInstanceAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
