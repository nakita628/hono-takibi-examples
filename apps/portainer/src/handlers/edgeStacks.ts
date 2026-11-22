import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEdgeStacksIdRoute,
  getEdgeStacksIdFileRoute,
  getEdgeStacksIdRoute,
  getEdgeStacksRoute,
  postEdgeStacksCreateFileRoute,
  postEdgeStacksCreateRepositoryRoute,
  postEdgeStacksCreateStringRoute,
  putEdgeStacksIdRoute,
  putEdgeStacksIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const edgeStacksHandler = app
  .openapi(getEdgeStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEdgeStacksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeStacksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEdgeStacksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeStacksIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEdgeStacksIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeStacksCreateFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeStacksCreateRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeStacksCreateStringRoute, (c) => {
    throw new Error('Not implemented')
  })
