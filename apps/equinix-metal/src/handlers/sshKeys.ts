import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSshKeysIdRoute,
  getDevicesIdSshKeysRoute,
  getProjectsIdSshKeysRoute,
  getSshKeysIdRoute,
  getSshKeysRoute,
  postProjectsIdSshKeysRoute,
  postSshKeysRoute,
  putSshKeysIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sshKeysHandler = app
  .openapi(getDevicesIdSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(putSshKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
