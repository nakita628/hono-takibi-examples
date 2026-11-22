import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAnythingFormDataDeepObjectRoute,
  postAnythingFormDataFormRoute,
  postAnythingFormDataPipeDelimitedRoute,
  postAnythingFormDataRoute,
  postAnythingFormDataSpaceDelimitedRoute,
  putAnythingFormDataFormRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multipartFormDataEncodingHandler = app
  .openapi(postAnythingFormDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingFormDataFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingFormDataFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingFormDataSpaceDelimitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingFormDataPipeDelimitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingFormDataDeepObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
