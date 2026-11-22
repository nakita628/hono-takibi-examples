import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteObjectsDefinitionsDefaultObjectRoute,
  getObjectsDefinitionsDefaultObjectRoute,
  getObjectsDefinitionsDefaultRoute,
  postObjectsDefinitionsDefaultRoute,
  postObjectsMigrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customObjectDefinitionsHandler = app
  .openapi(getObjectsDefinitionsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsDefinitionsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteObjectsDefinitionsDefaultObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsDefinitionsDefaultObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
