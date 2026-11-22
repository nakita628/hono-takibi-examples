import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStructuredOutputIdRoute,
  getStructuredOutputIdRoute,
  getStructuredOutputRoute,
  patchStructuredOutputIdRoute,
  postStructuredOutputRoute,
  postStructuredOutputRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const structuredOutputsHandler = app
  .openapi(getStructuredOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStructuredOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStructuredOutputIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStructuredOutputIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStructuredOutputIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStructuredOutputRunRoute, (c) => {
    throw new Error('Not implemented')
  })
