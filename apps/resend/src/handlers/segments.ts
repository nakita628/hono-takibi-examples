import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSegmentsIdRoute,
  getSegmentsIdContactsRoute,
  getSegmentsIdRoute,
  getSegmentsRoute,
  patchSegmentsIdRoute,
  postSegmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const segmentsHandler = app
  .openapi(postSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
