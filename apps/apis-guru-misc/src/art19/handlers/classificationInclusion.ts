import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationInclusionsIdRoute, getClassificationInclusionsRoute } from '../routes'

const app = new OpenAPIHono()

export const classificationInclusionHandler = app
  .openapi(getClassificationInclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationInclusionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
