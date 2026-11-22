import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DestinationsDestinationIdEnablementRoute,
  getV1DestinationsDestinationIdEnablementRoute,
  postV1DestinationsDestinationIdEnablementRoute,
  putV1DestinationsDestinationIdEnablementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fusionDestinationEnablementHandler = app
  .openapi(postV1DestinationsDestinationIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DestinationsDestinationIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DestinationsDestinationIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DestinationsDestinationIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
