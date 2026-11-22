import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDatanewbusinessFunctionsRoute,
  getDatanewbusinessTokenRoute,
  getProvidersEmployersEmployerIdDatanewbusinesstokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataNewBusinessHandler = app
  .openapi(getDatanewbusinessFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatanewbusinessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdDatanewbusinesstokenRoute, (c) => {
    throw new Error('Not implemented')
  })
