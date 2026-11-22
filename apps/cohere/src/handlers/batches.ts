import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BatchesIdRoute,
  getV2BatchesRoute,
  postV2BatchesIdCancelRoute,
  postV2BatchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchesHandler = app
  .openapi(getV2BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BatchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BatchesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
