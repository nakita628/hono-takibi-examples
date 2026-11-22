import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DataPathRoute,
  getV1DataPathRoute,
  patchV1DataPathRoute,
  postV0DataPathRoute,
  postV1DataPathRoute,
  putV1DataPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataAPIHandler = app
  .openapi(postV0DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
