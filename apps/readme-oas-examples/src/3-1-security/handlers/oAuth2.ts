import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnythingOauth2Route,
  getAnythingOauth2Route,
  patchAnythingOauth2Route,
  postAnythingOauth2Route,
  putAnythingOauth2Route,
} from '../routes'

const app = new OpenAPIHono()

export const oAuth2Handler = app
  .openapi(postAnythingOauth2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingOauth2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingOauth2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingOauth2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnythingOauth2Route, (c) => {
    throw new Error('Not implemented')
  })
