import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1DestinationsDestinationIdRoute,
  getPublicV1DestinationsDestinationIdRoute,
  getPublicV1DestinationsRoute,
  patchPublicV1DestinationsDestinationIdRoute,
  postPublicV1DestinationsRoute,
  putPublicV1DestinationsDestinationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicDestinationsHandler = app
  .openapi(getPublicV1DestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1DestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1DestinationsDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1DestinationsDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1DestinationsDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1DestinationsDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
