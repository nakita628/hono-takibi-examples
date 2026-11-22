import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDestinationsNameRoute,
  getDestinationsNameRoute,
  getDestinationsRoute,
  patchDestinationsNameRoute,
  postDestinationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const destinationsHandler = app
  .openapi(postDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDestinationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestinationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDestinationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
