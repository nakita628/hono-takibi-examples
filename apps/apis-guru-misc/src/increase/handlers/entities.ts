import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEntitiesEntityIdRoute,
  getEntitiesRoute,
  postEntitiesEntityIdSupplementalDocumentsRoute,
  postEntitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entitiesHandler = app
  .openapi(getEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEntitiesEntityIdSupplementalDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
