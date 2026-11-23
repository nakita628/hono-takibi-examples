import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePolicyResourceArnIndexRoute,
  deletePolicyResourceArnStatementsStatementIdIndexRoute,
  getPolicyResourceArnIndexRoute,
  postPolicyResourceArnIndexRoute,
  postPolicyResourceArnStatementsIndexRoute,
  putPolicyResourceArnIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policyHandler = app
  .openapi(postPolicyResourceArnIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePolicyResourceArnIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPolicyResourceArnIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPolicyResourceArnIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPolicyResourceArnStatementsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePolicyResourceArnStatementsStatementIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
