import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInputsInputNameRoute,
  getInputsInputNameRoute,
  getInputsRoute,
  postInputsRoute,
  putInputsInputNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inputsHandler = app
  .openapi(postInputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInputsInputNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInputsInputNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInputsInputNameRoute, (c) => {
    throw new Error('Not implemented')
  })
