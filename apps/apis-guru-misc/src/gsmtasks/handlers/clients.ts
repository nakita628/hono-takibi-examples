import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClientsIdIndexRoute,
  getClientsIndexRoute,
  patchClientsIdIndexRoute,
  postClientsIndexRoute,
  putClientsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(getClientsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchClientsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClientsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
