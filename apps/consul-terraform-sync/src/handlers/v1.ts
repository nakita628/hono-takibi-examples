import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TasksNameRoute,
  getV1HealthRoute,
  getV1StatusClusterRoute,
  getV1TasksNameRoute,
  getV1TasksRoute,
  postV1TasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1StatusClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TasksNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TasksNameRoute, (c) => {
    throw new Error('Not implemented')
  })
