import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConfigRawPathsRoute,
  getConfigRawRoute,
  getConfigRoute,
  getConfigSchemaJsonRoute,
  postConfigSaveRoute,
  putConfigSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getConfigSchemaJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRawPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConfigSetRoute, (c) => {
    throw new Error('Not implemented')
  })
