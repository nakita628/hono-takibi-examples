import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ActorsActorIdRoute,
  getV2ActorOauthAccountsAccountIdRoute,
  getV2ActorOauthAccountsConnectionIdAccountsRoute,
  getV2ActorsActorIdOauthConnectionsRoute,
  getV2ActorsActorIdRoute,
  getV2ActorsRoute,
  postV2ActorsActorIdValidateInputRoute,
  postV2ActorsRoute,
  putV2ActorsActorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorsHandler = app
  .openapi(getV2ActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ActorsActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorsActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdOauthConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdValidateInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorOauthAccountsConnectionIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorOauthAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
