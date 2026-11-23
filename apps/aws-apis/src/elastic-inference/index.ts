import { OpenAPIHono } from '@hono/zod-openapi'
import {
  describeAcceleratorOfferingsHandler,
  describeAcceleratorsHandler,
  describeAcceleratorTypesHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', describeAcceleratorOfferingsHandler)
  .route('/', describeAcceleratorTypesHandler)
  .route('/', describeAcceleratorsHandler)
  .route('/', tagsHandler)

export default app
