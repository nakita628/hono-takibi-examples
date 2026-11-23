import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAwsMountPathRolesNameRoute,
  deleteAwsMountPathStaticRolesNameRoute,
  getAwsMountPathConfigLeaseRoute,
  getAwsMountPathConfigRootRoute,
  getAwsMountPathCredsNameRoute,
  getAwsMountPathRolesIndexRoute,
  getAwsMountPathRolesNameRoute,
  getAwsMountPathStaticCredsNameRoute,
  getAwsMountPathStaticRolesNameRoute,
  getAwsMountPathStsNameRoute,
  postAwsMountPathConfigLeaseRoute,
  postAwsMountPathConfigRootRoute,
  postAwsMountPathConfigRotateRootRoute,
  postAwsMountPathCredsNameRoute,
  postAwsMountPathRolesNameRoute,
  postAwsMountPathStaticRolesNameRoute,
  postAwsMountPathStsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const awsMountPathHandler = app
  .openapi(getAwsMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathConfigRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathConfigRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathConfigRotateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAwsMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathStaticCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAwsMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathStsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathStsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
