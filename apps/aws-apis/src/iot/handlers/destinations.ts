import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDestinationsArnRoute,
  getDestinationsArnRoute,
  getDestinationsRoute,
  patchDestinationsRoute,
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
  .openapi(patchDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDestinationsArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestinationsArnRoute, (c) => {
    throw new Error('Not implemented')
  })
