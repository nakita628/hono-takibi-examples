import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationSearchApplicationNameRoute,
  getApplicationSearchApplicationNameRoute,
  getApplicationSearchApplicationNameSearchRoute,
  getApplicationSearchApplicationRoute,
  postApplicationSearchApplicationNameRenderQueryRoute,
  postApplicationSearchApplicationNameSearchRoute,
  putApplicationSearchApplicationNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchApplicationHandler = app
  .openapi(getApplicationSearchApplicationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationSearchApplicationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationSearchApplicationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationSearchApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationSearchApplicationNameRenderQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationSearchApplicationNameSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationSearchApplicationNameSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
