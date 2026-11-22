import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdentifierSessionAnnotationsRoute,
  deleteV1ProjectsProjectIdentifierSpanAnnotationsRoute,
  deleteV1ProjectsProjectIdentifierTraceAnnotationsRoute,
  getV1ProjectsProjectIdentifierSessionAnnotationsRoute,
  getV1ProjectsProjectIdentifierSpanAnnotationsRoute,
  getV1ProjectsProjectIdentifierTraceAnnotationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const annotationsHandler = app
  .openapi(getV1ProjectsProjectIdentifierSpanAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierSpanAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierTraceAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierTraceAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierSessionAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierSessionAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
