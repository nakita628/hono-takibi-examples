import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ImageTransformationsJobIdRoute, postV1ImageTransformationsRoute } from '../routes'

const app = new OpenAPIHono()

export const imageTransformationHandler = app
  .openapi(postV1ImageTransformationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImageTransformationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
