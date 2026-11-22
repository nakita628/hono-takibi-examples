import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3MypreferencesLocaleRoute,
  deleteRestApi3MypreferencesRoute,
  getRestApi3MypreferencesLocaleRoute,
  getRestApi3MypreferencesRoute,
  getRestApi3MyselfRoute,
  putRestApi3MypreferencesLocaleRoute,
  putRestApi3MypreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const myselfHandler = app
  .openapi(deleteRestApi3MypreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3MypreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3MypreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3MypreferencesLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3MypreferencesLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3MypreferencesLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3MyselfRoute, (c) => {
    throw new Error('Not implemented')
  })
