import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchRequestBodyPrimitiveExampleRoute,
  postRequestBodyPrimitiveExampleRoute,
  putRequestBodyPrimitiveExampleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestBodyPrimitiveExampleHandler = app
  .openapi(postRequestBodyPrimitiveExampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRequestBodyPrimitiveExampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRequestBodyPrimitiveExampleRoute, (c) => {
    throw new Error('Not implemented')
  })
