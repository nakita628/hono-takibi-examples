import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDestinationsIdRoute,
  getDestinationsIdRoute,
  getDestinationsRoute,
  postDestinationsRoute,
  putDestinationsIdArchiveRoute,
  putDestinationsIdDisableRoute,
  putDestinationsIdEnableRoute,
  putDestinationsIdRoute,
  putDestinationsIdUnarchiveRoute,
  putDestinationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const destinationsHandler = app
  .openapi(getDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestinationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDestinationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDestinationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDestinationsIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDestinationsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDestinationsIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDestinationsIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
