import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DatabasesIdRoute,
  patchV1DatabasesIdRoute,
  postV1DatabasesIdQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databasesHandler = app
  .openapi(getV1DatabasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DatabasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatabasesIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
