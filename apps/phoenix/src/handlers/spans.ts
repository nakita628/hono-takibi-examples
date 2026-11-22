import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SpansSpanIdentifierRoute,
  getV1ProjectsProjectIdentifierSpansOtlpv1Route,
  getV1ProjectsProjectIdentifierSpansRoute,
  postV1DocumentAnnotationsRoute,
  postV1ProjectsProjectIdentifierSpansRoute,
  postV1SpanAnnotationsRoute,
  postV1SpanNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spansHandler = app
  .openapi(getV1ProjectsProjectIdentifierSpansOtlpv1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdentifierSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpanAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpanNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SpansSpanIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DocumentAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
