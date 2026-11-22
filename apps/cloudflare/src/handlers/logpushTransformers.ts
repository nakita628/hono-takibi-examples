import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdLogpushTransformersTransformerIdRoute,
  getAccountsAccountIdLogpushTransformersRoute,
  getAccountsAccountIdLogpushTransformersTransformerIdContentRoute,
  getAccountsAccountIdLogpushTransformersTransformerIdRoute,
  getAccountsAccountIdLogpushTransformersTransformerIdVersionsRoute,
  postAccountsAccountIdLogpushTransformersPreviewRoute,
  postAccountsAccountIdLogpushTransformersRoute,
  putAccountsAccountIdLogpushTransformersTransformerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logpushTransformersHandler = app
  .openapi(getAccountsAccountIdLogpushTransformersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogpushTransformersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogpushTransformersPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdLogpushTransformersTransformerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogpushTransformersTransformerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdLogpushTransformersTransformerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogpushTransformersTransformerIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogpushTransformersTransformerIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
