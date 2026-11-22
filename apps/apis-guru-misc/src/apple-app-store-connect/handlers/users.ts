import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1UsersIdRelationshipsVisibleAppsRoute,
  deleteV1UsersIdRoute,
  getV1UsersIdRelationshipsVisibleAppsRoute,
  getV1UsersIdRoute,
  getV1UsersIdVisibleAppsRoute,
  getV1UsersRoute,
  patchV1UsersIdRelationshipsVisibleAppsRoute,
  patchV1UsersIdRoute,
  postV1UsersIdRelationshipsVisibleAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersIdRelationshipsVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersIdRelationshipsVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1UsersIdRelationshipsVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersIdRelationshipsVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersIdVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
