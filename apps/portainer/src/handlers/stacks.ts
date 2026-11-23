import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStacksIdRoute,
  deleteStacksNameNameRoute,
  getStacksIdFileRoute,
  getStacksIdRoute,
  getStacksRoute,
  postStacksCreateKubernetesRepositoryRoute,
  postStacksCreateKubernetesStringRoute,
  postStacksCreateKubernetesUrlRoute,
  postStacksCreateStandaloneFileRoute,
  postStacksCreateStandaloneRepositoryRoute,
  postStacksCreateStandaloneStringRoute,
  postStacksCreateSwarmFileRoute,
  postStacksCreateSwarmRepositoryRoute,
  postStacksCreateSwarmStringRoute,
  postStacksIdGitRoute,
  postStacksIdMigrateRoute,
  postStacksIdStartRoute,
  postStacksIdStopRoute,
  postStacksWebhooksWebhookIDRoute,
  putStacksIdAssociateRoute,
  putStacksIdGitRedeployRoute,
  putStacksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stacksHandler = app
  .openapi(getStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStacksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStacksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStacksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStacksIdAssociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStacksIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksIdGitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStacksIdGitRedeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksIdMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksCreateKubernetesRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksCreateKubernetesStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksCreateKubernetesUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksCreateStandaloneFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksCreateStandaloneRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksCreateStandaloneStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksCreateSwarmFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksCreateSwarmRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksCreateSwarmStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStacksNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksWebhooksWebhookIDRoute, (c) => {
    throw new Error('Not implemented')
  })
