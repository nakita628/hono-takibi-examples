import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommandsNameRoute,
  getCommandsNameRoute,
  getCommandsRoute,
  postCommandsRoute,
  putCommandsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commandsHandler = app
  .openapi(getCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommandsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommandsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCommandsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
