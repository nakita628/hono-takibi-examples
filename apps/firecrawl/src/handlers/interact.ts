import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInteractSessionIdRoute,
  getInteractRoute,
  postInteractRoute,
  postInteractSessionIdExecuteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const interactHandler = app
  .openapi(postInteractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInteractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInteractSessionIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInteractSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
