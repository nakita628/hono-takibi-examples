import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRacesIndexProficienciesRoute,
  getApiRacesIndexRoute,
  getApiRacesIndexSubracesRoute,
  getApiRacesIndexTraitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const racesHandler = app
  .openapi(getApiRacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRacesIndexProficienciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRacesIndexSubracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRacesIndexTraitsRoute, (c) => {
    throw new Error('Not implemented')
  })
