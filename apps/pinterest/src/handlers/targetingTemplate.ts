import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdTargetingTemplatesRoute,
  patchAdAccountsAdAccountIdTargetingTemplatesRoute,
  postAdAccountsAdAccountIdTargetingTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetingTemplateHandler = app
  .openapi(getAdAccountsAdAccountIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
