import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEnvironmentDefaultDirectoryBrowserRoute,
  getEnvironmentDirectoryContentsRoute,
  getEnvironmentDrivesRoute,
  getEnvironmentParentPathRoute,
  postEnvironmentValidatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentHandler = app
  .openapi(getEnvironmentDefaultDirectoryBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentDirectoryContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentParentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnvironmentValidatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
