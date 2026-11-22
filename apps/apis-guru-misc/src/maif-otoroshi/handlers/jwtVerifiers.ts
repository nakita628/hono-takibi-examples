import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVerifiersVerifierIdRoute,
  getApiVerifiersRoute,
  getApiVerifiersVerifierIdRoute,
  patchApiVerifiersVerifierIdRoute,
  postApiVerifiersRoute,
  putApiVerifiersVerifierIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jwtVerifiersHandler = app
  .openapi(getApiVerifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVerifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVerifiersVerifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVerifiersVerifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVerifiersVerifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVerifiersVerifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
