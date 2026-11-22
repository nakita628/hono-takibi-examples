import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyRoute,
  getApiV2ProjectsProjectKeyFlagDefaultsRoute,
  getApiV2ProjectsProjectKeyRoute,
  getApiV2ProjectsRoute,
  patchApiV2ProjectsProjectKeyFlagDefaultsRoute,
  patchApiV2ProjectsProjectKeyRoute,
  postApiV2ProjectsRoute,
  putApiV2ProjectsProjectKeyFlagDefaultsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getApiV2ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyFlagDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyFlagDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyFlagDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
