import { OpenAPIHono } from '@hono/zod-openapi'
import { postActorTokensActorTokenIdRevokeRoute, postActorTokensRoute } from '../routes'

const app = new OpenAPIHono()

export const actorTokensHandler = app
  .openapi(postActorTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActorTokensActorTokenIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
