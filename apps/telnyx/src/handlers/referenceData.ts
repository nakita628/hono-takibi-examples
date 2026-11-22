import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCallReasonsRoute,
  getDirDocumentTypesRoute,
  postCallReasonsValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const referenceDataHandler = app
  .openapi(getCallReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallReasonsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirDocumentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
