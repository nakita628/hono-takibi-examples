import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSftpHostKeysIdRoute,
  getSftpHostKeysIdRoute,
  getSftpHostKeysRoute,
  patchSftpHostKeysIdRoute,
  postSftpHostKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sftpHostKeysHandler = app
  .openapi(getSftpHostKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSftpHostKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSftpHostKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSftpHostKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSftpHostKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
