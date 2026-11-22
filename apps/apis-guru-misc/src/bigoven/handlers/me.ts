import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMePreferencesOptionsRoute,
  getMeRoute,
  getMeSkinnyRoute,
  putMePersonalRoute,
  putMePreferencesRoute,
  putMeProfileRoute,
  putMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePersonalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePreferencesOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSkinnyRoute, (c) => {
    throw new Error('Not implemented')
  })
