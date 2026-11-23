import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsulMountPathRolesNameRoute,
  getConsulMountPathConfigAccessRoute,
  getConsulMountPathCredsRoleRoute,
  getConsulMountPathRolesIndexRoute,
  getConsulMountPathRolesNameRoute,
  postConsulMountPathConfigAccessRoute,
  postConsulMountPathRolesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consulMountPathHandler = app
  .openapi(getConsulMountPathConfigAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsulMountPathConfigAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsulMountPathCredsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsulMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsulMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsulMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsulMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
