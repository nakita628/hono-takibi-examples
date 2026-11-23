import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnythingOauth2Route,
  getAnythingApiKeyRoute,
  getAnythingOauth2Route,
  patchAnythingOauth2Route,
  postAnythingApiKeyRoute,
  postAnythingBasicRoute,
  postAnythingBearerRoute,
  postAnythingMutualTLSRoute,
  postAnythingNoAuthRoute,
  postAnythingOauth2Route,
  postAnythingOpenIdConnectRoute,
  putAnythingApiKeyRoute,
  putAnythingBearerRoute,
  putAnythingOauth2Route,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(getAnythingApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingBasicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingMutualTLSRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postAnythingOpenIdConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingNoAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
