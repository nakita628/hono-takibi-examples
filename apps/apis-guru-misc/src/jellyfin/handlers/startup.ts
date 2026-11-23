import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStartupConfigurationRoute,
  getStartupFirstUserRoute,
  getStartupUserRoute,
  postStartupCompleteRoute,
  postStartupConfigurationRoute,
  postStartupRemoteAccessRoute,
  postStartupUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const startupHandler = app
  .openapi(postStartupCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStartupConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStartupConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStartupFirstUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStartupRemoteAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStartupUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStartupUserRoute, (c) => {
    throw new Error('Not implemented')
  })
