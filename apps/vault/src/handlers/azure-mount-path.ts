import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAzureMountPathConfigRoute,
  deleteAzureMountPathRolesNameRoute,
  getAzureMountPathConfigRoute,
  getAzureMountPathCredsRoleRoute,
  getAzureMountPathRolesIndexRoute,
  getAzureMountPathRolesNameRoute,
  postAzureMountPathConfigRoute,
  postAzureMountPathRolesNameRoute,
  postAzureMountPathRotateRootRoute,
} from '../routes'

const app = new OpenAPIHono()

export const azureMountPathHandler = app
  .openapi(getAzureMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAzureMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAzureMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAzureMountPathCredsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAzureMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAzureMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAzureMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAzureMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAzureMountPathRotateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
