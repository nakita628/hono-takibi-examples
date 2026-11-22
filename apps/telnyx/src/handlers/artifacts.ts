import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getArtifactDownloadsArtifactIdRoute,
  getBrowserSessionsIdArtifactsArtifactIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const artifactsHandler = app
  .openapi(getArtifactDownloadsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserSessionsIdArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
