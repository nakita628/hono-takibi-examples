import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AttributesPropertyRoute,
  getV1AttributesRoute,
  postV1AttributesRoute,
  putV1AttributesPropertyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attributesHandler = app
  .openapi(getV1AttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AttributesPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AttributesPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
