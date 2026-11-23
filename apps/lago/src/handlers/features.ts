import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFeaturesCodePrivilegesPrivilegeCodeRoute,
  deleteFeaturesCodeRoute,
  getFeaturesCodeRoute,
  getFeaturesRoute,
  postFeaturesRoute,
  putFeaturesCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featuresHandler = app
  .openapi(postFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeaturesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFeaturesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeaturesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFeaturesCodePrivilegesPrivilegeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
