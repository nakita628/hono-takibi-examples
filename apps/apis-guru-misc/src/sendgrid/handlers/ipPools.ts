import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpsPoolsPoolNameIpsIpRoute,
  deleteIpsPoolsPoolNameRoute,
  getIpsPoolsPoolNameRoute,
  getIpsPoolsRoute,
  postIpsPoolsPoolNameIpsRoute,
  postIpsPoolsRoute,
  putIpsPoolsPoolNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipPoolsHandler = app
  .openapi(getIpsPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpsPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpsPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsPoolsPoolNameIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpsPoolsPoolNameIpsIpRoute, (c) => {
    throw new Error('Not implemented')
  })
