import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiSpaceSpaceKeyPermissionIdRoute,
  postWikiRestApiSpaceSpaceKeyPermissionCustomContentRoute,
  postWikiRestApiSpaceSpaceKeyPermissionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spacePermissionsHandler = app
  .openapi(postWikiRestApiSpaceSpaceKeyPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiSpaceSpaceKeyPermissionCustomContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiSpaceSpaceKeyPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
