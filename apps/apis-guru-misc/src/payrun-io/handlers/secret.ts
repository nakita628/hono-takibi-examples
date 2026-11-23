import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecretSecretIdRoute,
  getSecretSecretIdRoute,
  putSecretSecretIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretHandler = app
  .openapi(deleteSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
