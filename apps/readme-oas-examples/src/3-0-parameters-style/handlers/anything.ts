import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingHeadersRoute,
  getAnythingHeadersSimpleRoute,
  getAnythingPathLabelPrimitiveArrayObjectRoute,
  getAnythingPathMatrixPrimitiveArrayObjectRoute,
  getAnythingPathPrimitiveArrayObjectRoute,
  getAnythingPathSimplePrimitiveArrayObjectRoute,
  getAnythingQueryDeepObjectRoute,
  getAnythingQueryFormRoute,
  getAnythingQueryPipeDelimitedRoute,
  getAnythingQueryRoute,
  getAnythingQuerySpaceDelimitedRoute,
  postAnythingFormDataDeepObjectRoute,
  postAnythingFormDataFormRoute,
  postAnythingFormDataPipeDelimitedRoute,
  postAnythingFormDataRoute,
  postAnythingFormDataSpaceDelimitedRoute,
  postAnythingHeadersSimpleRoute,
  postAnythingPathLabelPrimitiveArrayObjectRoute,
  postAnythingPathMatrixPrimitiveArrayObjectRoute,
  postAnythingPathSimplePrimitiveArrayObjectRoute,
  postAnythingQueryFormRoute,
  putAnythingFormDataFormRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(getAnythingHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingHeadersSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingHeadersSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingPathPrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingPathMatrixPrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingPathMatrixPrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingPathLabelPrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingPathLabelPrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingPathSimplePrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingPathSimplePrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingQueryFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingQueryFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingQuerySpaceDelimitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingQueryPipeDelimitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingQueryDeepObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
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
