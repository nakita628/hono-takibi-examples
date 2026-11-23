import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoutesIdIndexRoute,
  getRoutesIdIndexRoute,
  getRoutesIndexRoute,
  patchRoutesIdIndexRoute,
  postRoutesIndexRoute,
  putRoutesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routesHandler = app
  .openapi(getRoutesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoutesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoutesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRoutesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
