import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdentifierTracesRoute,
  deleteV1TracesTraceIdentifierRoute,
  getV1ProjectsProjectIdentifierTracesRoute,
  postV1TraceAnnotationsRoute,
  postV1TraceNotesRoute,
  postV1TracesTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tracesHandler = app
  .openapi(getV1ProjectsProjectIdentifierTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TraceAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TraceNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TracesTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TracesTraceIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
