import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEndpointsIdEdgeStacksStackIdRoute,
  getEndpointsIdEdgeStatusRoute,
  postEndpointsIdEdgeJobsJobIDLogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const edgeAgentHandler = app
  .openapi(postEndpointsIdEdgeJobsJobIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdEdgeStacksStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdEdgeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
