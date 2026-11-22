import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateOllieStateRoute,
  getV1PrivateOllieStateRoute,
  putV1PrivateOllieStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ollieStateHandler = app
  .openapi(getV1PrivateOllieStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateOllieStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateOllieStateRoute, (c) => {
    throw new Error('Not implemented')
  })
