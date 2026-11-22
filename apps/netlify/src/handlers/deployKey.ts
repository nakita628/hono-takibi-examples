import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeployKeysKeyIdRoute,
  getDeployKeysKeyIdRoute,
  getDeployKeysRoute,
  postDeployKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deployKeyHandler = app
  .openapi(getDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
