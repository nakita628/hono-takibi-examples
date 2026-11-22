import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransformationsIdRoute,
  getTransformationsIdExecutionsExecutionIdRoute,
  getTransformationsIdExecutionsRoute,
  getTransformationsIdRoute,
  getTransformationsRoute,
  postTransformationsRoute,
  putTransformationsIdRoute,
  putTransformationsRoute,
  putTransformationsRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transformationsHandler = app
  .openapi(getTransformationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransformationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransformationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransformationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransformationsRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformationsIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformationsIdExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
