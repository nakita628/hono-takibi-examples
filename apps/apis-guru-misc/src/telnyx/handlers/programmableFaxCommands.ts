import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFaxesIdRoute,
  getFaxesIdRoute,
  getFaxesRoute,
  postFaxesIdActionsRefreshRoute,
  postFaxesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const programmableFaxCommandsHandler = app
  .openapi(getFaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFaxesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFaxesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFaxesIdActionsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
