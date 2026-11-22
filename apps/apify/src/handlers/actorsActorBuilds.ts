import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2ActorsActorIdBuildsBuildIdOpenapiJsonRoute,
  getV2ActorsActorIdBuildsBuildIdRoute,
  getV2ActorsActorIdBuildsDefaultRoute,
  getV2ActorsActorIdBuildsRoute,
  postV2ActorsActorIdBuildsBuildIdAbortRoute,
  postV2ActorsActorIdBuildsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorsActorBuildsHandler = app
  .openapi(getV2ActorsActorIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdBuildsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdBuildsBuildIdOpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdBuildsBuildIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
