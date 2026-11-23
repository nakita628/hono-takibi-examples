import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSpotsIdRoute,
  getSpotsIdSetsRoute,
  getSpotsIdSetsSetIdRoute,
  getSpotsRoute,
  postSpotsIdSetsRoute,
  putSpotsIdRoute,
  putSpotsIdSetsSetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spotsHandler = app
  .openapi(getSpotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpotsIdSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpotsIdSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpotsIdSetsSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpotsIdSetsSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
