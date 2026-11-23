import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEdgeConfigEdgeConfigIdRoute,
  deleteEdgeConfigEdgeConfigIdTokensRoute,
  getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyRoute,
  getEdgeConfigEdgeConfigIdItemsRoute,
  getEdgeConfigEdgeConfigIdRoute,
  getEdgeConfigEdgeConfigIdTokensRoute,
  getEdgeConfigEdgeConfigIdTokenTokenRoute,
  getEdgeConfigRoute,
  patchEdgeConfigEdgeConfigIdItemsRoute,
  postEdgeConfigEdgeConfigIdTokenRoute,
  postEdgeConfigRoute,
  putEdgeConfigEdgeConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const edgeConfigHandler = app
  .openapi(getEdgeConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEdgeConfigEdgeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeConfigEdgeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEdgeConfigEdgeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeConfigEdgeConfigIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEdgeConfigEdgeConfigIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeConfigEdgeConfigIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeConfigEdgeConfigIdTokenTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEdgeConfigEdgeConfigIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeConfigEdgeConfigIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
