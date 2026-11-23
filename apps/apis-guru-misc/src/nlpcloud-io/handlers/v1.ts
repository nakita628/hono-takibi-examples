import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1EnCoreWebSmIndexRoute,
  getV1EnCoreWebSmVersionRoute,
  postV1EnCoreWebSmDependenciesRoute,
  postV1EnCoreWebSmEntitiesRoute,
  postV1EnCoreWebSmSentenceDependenciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1EnCoreWebSmIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnCoreWebSmDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnCoreWebSmEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnCoreWebSmSentenceDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnCoreWebSmVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
