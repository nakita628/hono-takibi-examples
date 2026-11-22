import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1DestinationsDestinationIdExecuteRoute } from '../routes'

const app = new OpenAPIHono()

export const destinationExecutionHandler = app.openapi(
  postV1DestinationsDestinationIdExecuteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
