import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActorsActorIdExternalIdentitiesIdRoute,
  getActorsActorIdExternalIdentitiesIdRoute,
  getActorsActorIdExternalIdentitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalIdentitiesHandler = app
  .openapi(getActorsActorIdExternalIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteActorsActorIdExternalIdentitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActorsActorIdExternalIdentitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
