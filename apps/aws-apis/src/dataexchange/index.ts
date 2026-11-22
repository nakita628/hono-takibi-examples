import { OpenAPIHono } from '@hono/zod-openapi'
import {
  tagsHandler,
  v1Handler,
  v1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v1Handler)
  .route('/', tagsHandler)
  .route(
    '/',
    v1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdHandler,
  )

export default app
