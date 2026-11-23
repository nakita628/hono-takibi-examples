import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailListsIdRoute,
  getEmailListsIdRoute,
  getEmailListsRoute,
  patchEmailListsIdRoute,
  postEmailListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailListsHandler = app
  .openapi(getEmailListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
