import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1JobsJobIdRoute,
  getPublicV1JobsJobIdRoute,
  getPublicV1JobsRoute,
  postPublicV1JobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicJobsHandler = app
  .openapi(getPublicV1JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
