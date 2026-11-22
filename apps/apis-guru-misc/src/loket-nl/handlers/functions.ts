import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdFunctionsRoute,
  getProvidersEmployersFunctionsFunctionIdRoute,
  postProvidersEmployersEmployerIdFunctionsRoute,
  putProvidersEmployersFunctionsFunctionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const functionsHandler = app
  .openapi(getProvidersEmployersFunctionsFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersFunctionsFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
