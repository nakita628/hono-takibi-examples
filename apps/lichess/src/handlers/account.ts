import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAccountEmailRoute,
  getApiAccountKidRoute,
  getApiAccountPreferencesRoute,
  getApiAccountRoute,
  postApiAccountKidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getApiAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountKidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountKidRoute, (c) => {
    throw new Error('Not implemented')
  })
