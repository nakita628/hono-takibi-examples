import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSandboxSandboxIdRoute,
  getSandboxSandboxIdRoute,
  postSandboxRoute,
  putSandboxRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sandboxHandler = app
  .openapi(postSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSandboxSandboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
