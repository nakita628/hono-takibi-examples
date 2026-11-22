import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecretSecretIdRoute,
  getSecretSecretIdRoute,
  getSecretsRoute,
  postSecretsRoute,
  putSecretSecretIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app
  .openapi(deleteSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
