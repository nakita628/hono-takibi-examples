import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClientsClientRoute,
  getClientsClientRoute,
  getClientsRoute,
  getClientsSuggestionsRoute,
  postClientsBatchDeleteRoute,
  postClientsRoute,
  putClientsClientRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientManagementHandler = app
  .openapi(getClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
