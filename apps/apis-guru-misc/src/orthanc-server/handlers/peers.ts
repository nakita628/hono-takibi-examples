import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePeersIdRoute,
  getPeersIdConfigurationRoute,
  getPeersIdRoute,
  getPeersIdSystemRoute,
  getPeersRoute,
  postPeersIdStoreRoute,
  postPeersIdStoreStraightRoute,
  putPeersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const peersHandler = app
  .openapi(getPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePeersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPeersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeersIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPeersIdStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPeersIdStoreStraightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeersIdSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
