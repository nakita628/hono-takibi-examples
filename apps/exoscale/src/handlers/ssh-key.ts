import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSshKeyNameRoute,
  getSshKeyNameRoute,
  getSshKeyRoute,
  postSshKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sshKeyHandler = app
  .openapi(deleteSshKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
