import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionProfileSshkeysSshKeyIdRoute,
  getApiVersionProfileSshkeysRoute,
  getApiVersionProfileSshkeysSshKeyIdRoute,
  postApiVersionProfileSshkeysRoute,
  putApiVersionProfileSshkeysSshKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sshKeysHandler = app
  .openapi(postApiVersionProfileSshkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileSshkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileSshkeysSshKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionProfileSshkeysSshKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionProfileSshkeysSshKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
