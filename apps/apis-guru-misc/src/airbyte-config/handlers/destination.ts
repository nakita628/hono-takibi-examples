import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DestinationsCheckConnectionForUpdateRoute,
  postV1DestinationsCheckConnectionRoute,
  postV1DestinationsCloneRoute,
  postV1DestinationsCreateRoute,
  postV1DestinationsDeleteRoute,
  postV1DestinationsGetRoute,
  postV1DestinationsListRoute,
  postV1DestinationsSearchRoute,
  postV1DestinationsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const destinationHandler = app
  .openapi(postV1DestinationsCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCheckConnectionForUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
