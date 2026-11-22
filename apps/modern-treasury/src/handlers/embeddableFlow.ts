import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiEmbeddableFlowsIdRoute,
  getApiEmbeddableFlowsRoute,
  patchApiEmbeddableFlowsIdRoute,
  postApiEmbeddableFlowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const embeddableFlowHandler = app
  .openapi(getApiEmbeddableFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEmbeddableFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEmbeddableFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiEmbeddableFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
