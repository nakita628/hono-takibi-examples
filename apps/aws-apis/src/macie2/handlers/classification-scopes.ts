import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClassificationScopesIdRoute,
  getClassificationScopesRoute,
  patchClassificationScopesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classificationScopesHandler = app
  .openapi(getClassificationScopesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchClassificationScopesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
