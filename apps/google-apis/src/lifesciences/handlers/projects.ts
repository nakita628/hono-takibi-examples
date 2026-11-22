import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2betaNameLocationsRoute,
  getV2betaNameOperationsRoute,
  getV2betaNameRoute,
  postV2betaNameCancelRoute,
  postV2betaParentPipelinesRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV2betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaNameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaNameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaNameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaParentPipelinesRunRoute, (c) => {
    throw new Error('Not implemented')
  })
