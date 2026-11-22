import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ActorBuildsBuildIdRoute,
  getV2ActorBuildsBuildIdOpenapiJsonRoute,
  getV2ActorBuildsBuildIdRoute,
  getV2ActorBuildsRoute,
  postV2ActorBuildsBuildIdAbortRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorBuildsHandler = app
  .openapi(getV2ActorBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorBuildsBuildIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorBuildsBuildIdOpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
