import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiClustersTaskIdRoute,
  getAiClustersRoute,
  getAiClustersTaskIdGraphRoute,
  getAiClustersTaskIdRoute,
  postAiClustersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clustersHandler = app
  .openapi(getAiClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiClustersTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiClustersTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiClustersTaskIdGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
