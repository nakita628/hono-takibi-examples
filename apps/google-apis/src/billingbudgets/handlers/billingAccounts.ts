import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentBudgetsRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentBudgetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingAccountsHandler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
