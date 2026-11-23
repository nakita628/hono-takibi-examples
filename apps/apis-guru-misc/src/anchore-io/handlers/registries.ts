import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRegistriesRegistryRoute,
  getRegistriesRegistryRoute,
  getRegistriesRoute,
  postRegistriesRoute,
  putRegistriesRegistryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registriesHandler = app
  .openapi(getRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRegistriesRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistriesRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRegistriesRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
