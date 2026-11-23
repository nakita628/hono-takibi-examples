import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCanaryNameRoute,
  getCanaryNameRoute,
  patchCanaryNameRoute,
  postCanaryNameRunsRoute,
  postCanaryNameStartRoute,
  postCanaryNameStopRoute,
  postCanaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const canaryHandler = app
  .openapi(postCanaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCanaryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCanaryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCanaryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCanaryNameRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCanaryNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCanaryNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
