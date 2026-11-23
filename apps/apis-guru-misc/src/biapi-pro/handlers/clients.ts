import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClientsIdClientLogoRoute,
  deleteClientsIdClientRoute,
  getClientsIdClientRoute,
  getClientsRoute,
  postClientsIdClientLogoRoute,
  postClientsRoute,
  putClientsIdClientRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(getClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClientsIdClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsIdClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClientsIdClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClientsIdClientLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientsIdClientLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
