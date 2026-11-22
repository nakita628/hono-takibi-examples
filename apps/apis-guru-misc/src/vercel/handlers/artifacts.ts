import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV8ArtifactsHashRoute,
  getV8ArtifactsStatusRoute,
  headV8ArtifactsHashRoute,
  postV8ArtifactsEventsRoute,
  postV8ArtifactsRoute,
  putV8ArtifactsHashRoute,
} from '../routes'

const app = new OpenAPIHono()

export const artifactsHandler = app
  .openapi(postV8ArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV8ArtifactsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV8ArtifactsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV8ArtifactsHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV8ArtifactsHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV8ArtifactsHashRoute, (c) => {
    throw new Error('Not implemented')
  })
