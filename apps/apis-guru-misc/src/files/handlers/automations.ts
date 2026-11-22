import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAutomationsIdRoute,
  getAutomationsIdRoute,
  getAutomationsRoute,
  patchAutomationsIdRoute,
  postAutomationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automationsHandler = app
  .openapi(getAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAutomationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
