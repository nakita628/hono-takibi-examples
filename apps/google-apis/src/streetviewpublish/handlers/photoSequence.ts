import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PhotoSequenceSequenceIdRoute,
  getV1PhotoSequenceSequenceIdRoute,
  postV1PhotoSequenceRoute,
  postV1PhotoSequenceStartUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const photoSequenceHandler = app
  .openapi(postV1PhotoSequenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PhotoSequenceSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PhotoSequenceSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PhotoSequenceStartUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
