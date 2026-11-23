import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNomadMountPathConfigAccessRoute,
  deleteNomadMountPathConfigLeaseRoute,
  deleteNomadMountPathRoleNameRoute,
  getNomadMountPathConfigAccessRoute,
  getNomadMountPathConfigLeaseRoute,
  getNomadMountPathCredsNameRoute,
  getNomadMountPathRoleIndexRoute,
  getNomadMountPathRoleNameRoute,
  postNomadMountPathConfigAccessRoute,
  postNomadMountPathConfigLeaseRoute,
  postNomadMountPathRoleNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nomadMountPathHandler = app
  .openapi(getNomadMountPathConfigAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNomadMountPathConfigAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNomadMountPathConfigAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNomadMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNomadMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNomadMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNomadMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNomadMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNomadMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNomadMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNomadMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
