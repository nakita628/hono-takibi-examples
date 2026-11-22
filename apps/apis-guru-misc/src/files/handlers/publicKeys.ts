import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicKeysIdRoute,
  getPublicKeysIdRoute,
  getPublicKeysRoute,
  patchPublicKeysIdRoute,
  postPublicKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicKeysHandler = app
  .openapi(getPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
