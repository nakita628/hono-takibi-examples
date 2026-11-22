import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4OrganizationsIdRoute,
  deleteApiV4OrganizationsIdUsersUserIdRoute,
  getApiV4OrganizationsIdUsersRoute,
  postApiV4OrganizationsIdRestoreRoute,
  postApiV4OrganizationsIdTransferUsersRoute,
  postApiV4OrganizationsIdUsersRoute,
  postApiV4OrganizationsRoute,
  putApiV4OrganizationsIdUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(postApiV4OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4OrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4OrganizationsIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4OrganizationsIdTransferUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4OrganizationsIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4OrganizationsIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4OrganizationsIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4OrganizationsIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
