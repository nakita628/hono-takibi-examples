import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSignaturesIdIndexRoute,
  getSignaturesIdIndexRoute,
  getSignaturesIndexRoute,
  postSignaturesBatchDeleteIndexRoute,
  postSignaturesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const signaturesHandler = app
  .openapi(getSignaturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignaturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignaturesBatchDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSignaturesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSignaturesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
