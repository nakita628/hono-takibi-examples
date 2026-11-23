import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTaskCommandsIdIndexRoute,
  getTaskCommandsIndexRoute,
  postTaskCommandsIndexRoute,
  putTaskCommandsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskCommandsHandler = app
  .openapi(getTaskCommandsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaskCommandsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskCommandsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTaskCommandsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
