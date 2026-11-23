import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRabbitmqMountPathRolesNameRoute,
  getRabbitmqMountPathConfigLeaseRoute,
  getRabbitmqMountPathCredsNameRoute,
  getRabbitmqMountPathRolesIndexRoute,
  getRabbitmqMountPathRolesNameRoute,
  postRabbitmqMountPathConfigConnectionRoute,
  postRabbitmqMountPathConfigLeaseRoute,
  postRabbitmqMountPathRolesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rabbitmqMountPathHandler = app
  .openapi(postRabbitmqMountPathConfigConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRabbitmqMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRabbitmqMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRabbitmqMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRabbitmqMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRabbitmqMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRabbitmqMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRabbitmqMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
