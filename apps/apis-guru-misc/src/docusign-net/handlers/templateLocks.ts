import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdTemplatesTemplateIdLockRoute,
  getV21AccountsAccountIdTemplatesTemplateIdLockRoute,
  postV21AccountsAccountIdTemplatesTemplateIdLockRoute,
  putV21AccountsAccountIdTemplatesTemplateIdLockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateLocksHandler = app
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
