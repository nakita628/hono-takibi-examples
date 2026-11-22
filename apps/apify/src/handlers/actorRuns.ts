import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ActorRunsRunIdRoute,
  getV2ActorRunsRoute,
  getV2ActorRunsRunIdRoute,
  postV2ActorRunsRunIdChargeRoute,
  putV2ActorRunsRunIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorRunsHandler = app
  .openapi(getV2ActorRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ActorRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorRunsRunIdChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
