import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiInferenceEndpointsNamespaceAuthCheckPermsRoute,
  postApiInferenceEndpointsNamespaceEndpointAuthCheckPermsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inferenceEndpointsHandler = app
  .openapi(postApiInferenceEndpointsNamespaceAuthCheckPermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInferenceEndpointsNamespaceEndpointAuthCheckPermsRoute, (c) => {
    throw new Error('Not implemented')
  })
