import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEvents202609EventDefinitionsEventNamePropertyPropertyNameRoute,
  deleteEvents202609EventDefinitionsEventNameRoute,
  getEvents202609EventDefinitionsEventNameRoute,
  getEvents202609EventDefinitionsRoute,
  patchEvents202609EventDefinitionsEventNamePropertyPropertyNameRoute,
  patchEvents202609EventDefinitionsEventNameRoute,
  postEvents202609EventDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getEvents202609EventDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvents202609EventDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvents202609EventDefinitionsEventNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEvents202609EventDefinitionsEventNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEvents202609EventDefinitionsEventNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEvents202609EventDefinitionsEventNamePropertyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEvents202609EventDefinitionsEventNamePropertyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
