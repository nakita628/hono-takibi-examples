import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ActorDefinitionVersionsGetDefaultRoute,
  postV1ActorDefinitionVersionsGetForDestinationRoute,
  postV1ActorDefinitionVersionsGetForSourceRoute,
  postV1ActorDefinitionVersionsResolveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorDefinitionVersionHandler = app
  .openapi(postV1ActorDefinitionVersionsGetForSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionVersionsResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionVersionsGetDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionVersionsGetForDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
