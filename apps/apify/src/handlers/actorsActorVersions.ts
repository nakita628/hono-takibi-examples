import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
  deleteV2ActorsActorIdVersionsVersionNumberRoute,
  getV2ActorsActorIdVersionsRoute,
  getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
  getV2ActorsActorIdVersionsVersionNumberEnvVarsRoute,
  getV2ActorsActorIdVersionsVersionNumberRoute,
  postV2ActorsActorIdVersionsRoute,
  postV2ActorsActorIdVersionsVersionNumberEnvVarsRoute,
  putV2ActorsActorIdVersionsVersionNumberBuildOnPushRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorsActorVersionsHandler = app
  .openapi(getV2ActorsActorIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdVersionsVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorsActorIdVersionsVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ActorsActorIdVersionsVersionNumberBuildOnPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdVersionsVersionNumberEnvVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdVersionsVersionNumberEnvVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
