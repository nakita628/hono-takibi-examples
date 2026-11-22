import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAtlasV2Route, getApiAtlasV2UnauthControlPlaneIPAddressesRoute } from '../routes'

const app = new OpenAPIHono()

export const rootHandler = app
  .openapi(getApiAtlasV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2UnauthControlPlaneIPAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
