import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2beta1NameRoute,
  getV2beta1NameRoute,
  getV2beta1ParentTraceSinksRoute,
  patchV2beta1NameRoute,
  postV2beta1ParentTraceSinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2beta1Handler = app
  .openapi(deleteV2beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1ParentTraceSinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1ParentTraceSinksRoute, (c) => {
    throw new Error('Not implemented')
  })
