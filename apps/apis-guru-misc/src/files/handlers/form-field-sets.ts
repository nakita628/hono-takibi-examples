import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFormFieldSetsIdRoute,
  getFormFieldSetsIdRoute,
  getFormFieldSetsRoute,
  patchFormFieldSetsIdRoute,
  postFormFieldSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formFieldSetsHandler = app
  .openapi(getFormFieldSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFormFieldSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFormFieldSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormFieldSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFormFieldSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
