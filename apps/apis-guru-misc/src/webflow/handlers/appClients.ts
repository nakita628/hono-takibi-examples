import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppClientsAppClientIdRoute,
  getAppClientsRoute,
  optionsAppClientsAppClientIdRoute,
  optionsAppClientsRoute,
  patchAppClientsAppClientIdRoute,
  postAppClientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appClientsHandler = app
  .openapi(getAppClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAppClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppClientsAppClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAppClientsAppClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppClientsAppClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
