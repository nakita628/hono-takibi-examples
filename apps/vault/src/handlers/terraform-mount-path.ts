import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTerraformMountPathConfigRoute,
  deleteTerraformMountPathRoleNameRoute,
  getTerraformMountPathConfigRoute,
  getTerraformMountPathCredsNameRoute,
  getTerraformMountPathRoleIndexRoute,
  getTerraformMountPathRoleNameRoute,
  postTerraformMountPathConfigRoute,
  postTerraformMountPathCredsNameRoute,
  postTerraformMountPathRoleNameRoute,
  postTerraformMountPathRotateRoleNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terraformMountPathHandler = app
  .openapi(getTerraformMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerraformMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTerraformMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTerraformMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerraformMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTerraformMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTerraformMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerraformMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTerraformMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerraformMountPathRotateRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
