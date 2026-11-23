import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasExternalEndpointOpensearchEndpointIdRoute,
  getDbaasExternalEndpointOpensearchEndpointIdRoute,
  postDbaasExternalEndpointOpensearchNameRoute,
  putDbaasExternalEndpointOpensearchEndpointIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalEndpointOpensearchHandler = app
  .openapi(deleteDbaasExternalEndpointOpensearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointOpensearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointOpensearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasExternalEndpointOpensearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
