import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRegistriesIdRoute,
  getRegistriesIdRoute,
  getRegistriesRoute,
  postRegistriesIdConfigureRoute,
  postRegistriesPingRoute,
  postRegistriesRoute,
  putRegistriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registriesHandler = app
  .openapi(getRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRegistriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRegistriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistriesIdConfigureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistriesPingRoute, (c) => {
    throw new Error('Not implemented')
  })
