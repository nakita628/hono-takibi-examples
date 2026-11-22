import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAccountCollectionFlowsIdRoute,
  getApiAccountCollectionFlowsRoute,
  patchApiAccountCollectionFlowsIdRoute,
  postApiAccountCollectionFlowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountCollectionFlowHandler = app
  .openapi(getApiAccountCollectionFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountCollectionFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountCollectionFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAccountCollectionFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
