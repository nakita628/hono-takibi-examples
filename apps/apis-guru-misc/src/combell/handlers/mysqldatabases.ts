import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMysqldatabasesDatabaseNameRoute,
  deleteMysqldatabasesDatabaseNameUsersUserNameRoute,
  getMysqldatabasesDatabaseNameRoute,
  getMysqldatabasesDatabaseNameUsersRoute,
  getMysqldatabasesRoute,
  postMysqldatabasesDatabaseNameUsersRoute,
  postMysqldatabasesRoute,
  putMysqldatabasesDatabaseNameUsersUserNamePasswordRoute,
  putMysqldatabasesDatabaseNameUsersUserNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mysqldatabasesHandler = app
  .openapi(getMysqldatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMysqldatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMysqldatabasesDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMysqldatabasesDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMysqldatabasesDatabaseNameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMysqldatabasesDatabaseNameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMysqldatabasesDatabaseNameUsersUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMysqldatabasesDatabaseNameUsersUserNamePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMysqldatabasesDatabaseNameUsersUserNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
