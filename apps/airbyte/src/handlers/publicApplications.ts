import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1ApplicationsApplicationIdRoute,
  getPublicV1ApplicationsApplicationIdRoute,
  getPublicV1ApplicationsRoute,
  postPublicV1ApplicationsRoute,
  postPublicV1ApplicationsTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicApplicationsHandler = app
  .openapi(getPublicV1ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1ApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1ApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1ApplicationsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
