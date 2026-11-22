import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AutoRunsIdRoute,
  getV1AutoRunsRoute,
  postV1AutoRunsIdArtifactsRoute,
  postV1AutoRunsRoute,
  putV1AutoRunsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autoRunsHandler = app
  .openapi(postV1AutoRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AutoRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AutoRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AutoRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AutoRunsIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
