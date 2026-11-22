import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatus200Route,
  getStatus201Route,
  getStatus202Route,
  getStatus203Route,
  getStatus204Route,
  getStatus205Route,
  getStatus206Route,
  getStatus207Route,
  getStatus208Route,
  getStatus218Route,
  getStatus226Route,
} from '../routes'

const app = new OpenAPIHono()

export const successfulResponsesHandler = app
  .openapi(getStatus200Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus201Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus202Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus203Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus204Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus205Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus206Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus207Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus208Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus218Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus226Route, (c) => {
    throw new Error('Not implemented')
  })
