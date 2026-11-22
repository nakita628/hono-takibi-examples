import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMappingsMappingIdRoute,
  getMappingsFieldsRoute,
  getMappingsMappingIdRoute,
  getMappingsRoute,
  postMappingsRoute,
  putMappingsMappingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mappingsHandler = app
  .openapi(getMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMappingsMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMappingsMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMappingsMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMappingsFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
