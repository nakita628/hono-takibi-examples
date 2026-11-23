import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShieldListsShieldListIdRoute,
  getShieldListsRoute,
  getShieldListsShieldListIdRoute,
  postShieldListsRoute,
  putShieldListsShieldListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shieldListsHandler = app
  .openapi(getShieldListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShieldListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShieldListsShieldListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShieldListsShieldListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShieldListsShieldListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
