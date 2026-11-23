import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMongodbatlasMountPathRolesNameRoute,
  getMongodbatlasMountPathConfigRoute,
  getMongodbatlasMountPathCredsNameRoute,
  getMongodbatlasMountPathRolesIndexRoute,
  getMongodbatlasMountPathRolesNameRoute,
  postMongodbatlasMountPathConfigRoute,
  postMongodbatlasMountPathCredsNameRoute,
  postMongodbatlasMountPathRolesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mongodbatlasMountPathHandler = app
  .openapi(getMongodbatlasMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMongodbatlasMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMongodbatlasMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMongodbatlasMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMongodbatlasMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMongodbatlasMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMongodbatlasMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMongodbatlasMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
