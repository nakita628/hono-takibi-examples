import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4JobsIdArtifactsRoute,
  getApiV4JobsIdRuntimeEnvironmentKeyRoute,
  patchApiV4JobsIdTraceRoute,
  postApiV4JobsIdArtifactsAuthorizeRoute,
  postApiV4JobsIdArtifactsRoute,
  postApiV4JobsRequestRoute,
  putApiV4JobsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(postApiV4JobsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4JobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4JobsIdRuntimeEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4JobsIdTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4JobsIdArtifactsAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4JobsIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4JobsIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
