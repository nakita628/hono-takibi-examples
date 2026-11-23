import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAlicloudMountPathConfigRoute,
  deleteAlicloudMountPathRoleNameRoute,
  getAlicloudMountPathConfigRoute,
  getAlicloudMountPathCredsNameRoute,
  getAlicloudMountPathRoleIndexRoute,
  getAlicloudMountPathRoleNameRoute,
  postAlicloudMountPathConfigRoute,
  postAlicloudMountPathRoleNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alicloudMountPathHandler = app
  .openapi(getAlicloudMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlicloudMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlicloudMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlicloudMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlicloudMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlicloudMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlicloudMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlicloudMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
