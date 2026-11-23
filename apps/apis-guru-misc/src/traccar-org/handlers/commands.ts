import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommandsIdRoute,
  getCommandsRoute,
  getCommandsSendRoute,
  getCommandsTypesRoute,
  postCommandsRoute,
  postCommandsSendRoute,
  putCommandsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commandsHandler = app
  .openapi(getCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommandsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommandsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommandsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommandsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCommandsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
