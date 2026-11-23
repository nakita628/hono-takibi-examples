import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnvironmentEnvironmentIdRoute,
  getEnvironmentEnvironmentIdRoute,
  getEnvironmentRoute,
  postEnvironmentRoute,
  putEnvironmentEnvironmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentHandler = app
  .openapi(postEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvironmentEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnvironmentEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
