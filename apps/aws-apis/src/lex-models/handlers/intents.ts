import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIntentsNameRoute,
  deleteIntentsNameVersionsVersionRoute,
  getIntentsIndexRoute,
  getIntentsNameVersionsIndexRoute,
  getIntentsNameVersionsVersionRoute,
  postIntentsNameVersionsRoute,
  putIntentsNameVersionsLATESTRoute,
} from '../routes'

const app = new OpenAPIHono()

export const intentsHandler = app
  .openapi(postIntentsNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntentsNameVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntentsNameVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntentsNameVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIntentsNameVersionsLATESTRoute, (c) => {
    throw new Error('Not implemented')
  })
