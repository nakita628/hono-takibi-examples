import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiSectionSectionIdRoute, getApiSectionSectionIdStepRoute } from '../routes'

const app = new OpenAPIHono()

export const sectionHandler = app
  .openapi(getApiSectionSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSectionSectionIdStepRoute, (c) => {
    throw new Error('Not implemented')
  })
