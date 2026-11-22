import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ActorDefinitionsCreateRoute,
  postV1ActorDefinitionsFinishRoute,
  postV1ActorDefinitionsResultRoute,
  postV1ActorDefinitionsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorDefinitionHandler = app
  .openapi(postV1ActorDefinitionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionsFinishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionsResultRoute, (c) => {
    throw new Error('Not implemented')
  })
