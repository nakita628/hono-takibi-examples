import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationRoute,
  postEndpointsEndpointNameInvocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endpointsHandler = app
  .openapi(postEndpointsEndpointNameInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
