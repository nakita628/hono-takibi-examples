import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdCountriesDartIdRoute,
  getUserprofilesProfileIdCountriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const countriesHandler = app
  .openapi(getUserprofilesProfileIdCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCountriesDartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
