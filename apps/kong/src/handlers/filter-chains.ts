import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilterChainsFilterChainIdRoute,
  getFilterChainsFilterChainIdRoute,
  getFilterChainsRoute,
  patchFilterChainsFilterChainIdRoute,
  postFilterChainsRoute,
  putFilterChainsFilterChainIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filterChainsHandler = app
  .openapi(postFilterChainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilterChainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
