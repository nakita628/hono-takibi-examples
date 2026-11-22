import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAssignTerminalsRoute,
  postFindTerminalRoute,
  postGetStoresUnderAccountRoute,
  postGetTerminalDetailsRoute,
  postGetTerminalsUnderAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app
  .openapi(postAssignTerminalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFindTerminalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetStoresUnderAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetTerminalDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetTerminalsUnderAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
