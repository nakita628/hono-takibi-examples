import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRelationsIdRoute,
  getRelationsIdRoute,
  getRelationsRoute,
  patchRelationsIdRoute,
  postRelationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const relationsHandler = app
  .openapi(getRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRelationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRelationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
