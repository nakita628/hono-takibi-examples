import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePersonLoginTokenIdRoute,
  getPersonLoginGroupRoute,
  getPersonLoginRoute,
  getPersonLoginTokenRoute,
  getPersonRoute,
  postPersonLoginRoute,
  postPersonLoginTokenRoute,
  postPersonRegisterRoute,
  postPersonRoute,
  putPersonLoginRoute,
} from '../routes'

const app = new OpenAPIHono()

export const personHandler = app
  .openapi(getPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPersonRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPersonLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPersonLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonLoginGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonLoginTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPersonLoginTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePersonLoginTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
