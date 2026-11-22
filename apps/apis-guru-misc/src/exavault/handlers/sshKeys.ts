import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSshKeysIdRoute,
  getSshKeysIdRoute,
  getSshKeysRoute,
  postSshKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sshKeysHandler = app
  .openapi(getSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSshKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
