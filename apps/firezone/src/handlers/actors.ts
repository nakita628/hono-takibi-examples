import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActorsActorIdClientTokensIdRoute,
  deleteActorsActorIdClientTokensRoute,
  deleteActorsActorIdExternalIdentitiesIdRoute,
  deleteActorsIdRoute,
  getActorsActorIdClientTokensIdRoute,
  getActorsActorIdClientTokensRoute,
  getActorsActorIdExternalIdentitiesIdRoute,
  getActorsActorIdExternalIdentitiesRoute,
  getActorsIdRoute,
  getActorsRoute,
  patchActorsIdRoute,
  postActorsActorIdClientTokensRoute,
  postActorsRoute,
  putActorsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorsHandler = app
  .openapi(getActorsActorIdExternalIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteActorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchActorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putActorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteActorsActorIdClientTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActorsActorIdClientTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActorsActorIdClientTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteActorsActorIdClientTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActorsActorIdClientTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteActorsActorIdExternalIdentitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActorsActorIdExternalIdentitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
