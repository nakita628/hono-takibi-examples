import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3ProjectvalidateKeyRoute,
  getRestApi3ProjectvalidateValidProjectKeyRoute,
  getRestApi3ProjectvalidateValidProjectNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectKeyAndNameValidationHandler = app
  .openapi(getRestApi3ProjectvalidateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectvalidateValidProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectvalidateValidProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
