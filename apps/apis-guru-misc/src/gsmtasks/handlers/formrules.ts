import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFormrulesIdIndexRoute,
  getFormrulesIdIndexRoute,
  getFormrulesIndexRoute,
  patchFormrulesIdIndexRoute,
  postFormrulesIndexRoute,
  putFormrulesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formrulesHandler = app
  .openapi(getFormrulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFormrulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFormrulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormrulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFormrulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFormrulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
