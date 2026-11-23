import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasExternalEndpointElasticsearchEndpointIdRoute,
  getDbaasExternalEndpointElasticsearchEndpointIdRoute,
  postDbaasExternalEndpointElasticsearchNameRoute,
  putDbaasExternalEndpointElasticsearchEndpointIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalEndpointElasticsearchHandler = app
  .openapi(deleteDbaasExternalEndpointElasticsearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointElasticsearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointElasticsearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasExternalEndpointElasticsearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
