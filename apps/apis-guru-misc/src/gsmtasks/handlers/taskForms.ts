import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTaskFormsIdIndexRoute,
  getTaskFormsIdIndexRoute,
  getTaskFormsIndexRoute,
  patchTaskFormsIdIndexRoute,
  postTaskFormsIndexRoute,
  putTaskFormsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskFormsHandler = app
  .openapi(getTaskFormsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaskFormsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTaskFormsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskFormsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTaskFormsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTaskFormsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
