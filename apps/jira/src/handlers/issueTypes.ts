import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssuetypeIdRoute,
  getRestApi3IssuetypeIdAlternativesRoute,
  getRestApi3IssuetypeIdRoute,
  getRestApi3IssuetypeProjectRoute,
  getRestApi3IssuetypeRoute,
  postRestApi3IssuetypeIdAvatar2Route,
  postRestApi3IssuetypeRoute,
  putRestApi3IssuetypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueTypesHandler = app
  .openapi(getRestApi3IssuetypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuetypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuetypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeIdAlternativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuetypeIdAvatar2Route, (c) => {
    throw new Error('Not implemented')
  })
