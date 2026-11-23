import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV8ArtifactsRoute,
  deleteV8CertsIdRoute,
  getV8ArtifactsHashRoute,
  getV8ArtifactsStatusRoute,
  getV8CertsIdRoute,
  getV8CertsRoute,
  getV8DeploymentsIdFilesFileIdRoute,
  headV8ArtifactsHashRoute,
  postV8ArtifactsEventsRoute,
  postV8ArtifactsRoute,
  postV8CertsRoute,
  putV8ArtifactsHashRoute,
  putV8CertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v8Handler = app
  .openapi(postV8ArtifactsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV8ArtifactsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV8ArtifactsHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV8ArtifactsHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV8ArtifactsHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV8ArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV8ArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV8CertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV8CertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV8CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV8CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV8CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV8DeploymentsIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
