import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActorsActorIdClientTokensIdRoute,
  deleteActorsActorIdClientTokensRoute,
  getActorsActorIdClientTokensIdRoute,
  getActorsActorIdClientTokensRoute,
  postActorsActorIdClientTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientTokensHandler = app
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
