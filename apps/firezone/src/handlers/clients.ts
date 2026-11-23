import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClientsIdRoute,
  getClientsIdRoute,
  getClientsRoute,
  patchClientsIdRoute,
  putClientsIdRoute,
  putClientsIdUnverifyRoute,
  putClientsIdVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(deleteClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClientsIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClientsIdUnverifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
