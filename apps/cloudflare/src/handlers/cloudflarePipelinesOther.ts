import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdPipelinesPipelineNameRoute,
  deleteAccountsAccountIdPipelinesV1PipelinesPipelineIdRoute,
  deleteAccountsAccountIdPipelinesV1SinksSinkIdRoute,
  deleteAccountsAccountIdPipelinesV1StreamsStreamIdRoute,
  getAccountsAccountIdPipelinesPipelineNameRoute,
  getAccountsAccountIdPipelinesRoute,
  getAccountsAccountIdPipelinesV1PipelinesPipelineIdRoute,
  getAccountsAccountIdPipelinesV1PipelinesRoute,
  getAccountsAccountIdPipelinesV1SinksRoute,
  getAccountsAccountIdPipelinesV1SinksSinkIdRoute,
  getAccountsAccountIdPipelinesV1StreamsRoute,
  getAccountsAccountIdPipelinesV1StreamsStreamIdRoute,
  patchAccountsAccountIdPipelinesV1SinksSinkIdRoute,
  patchAccountsAccountIdPipelinesV1StreamsStreamIdRoute,
  postAccountsAccountIdPipelinesRoute,
  postAccountsAccountIdPipelinesV1PipelinesPipelineIdUpdateTablesRoute,
  postAccountsAccountIdPipelinesV1PipelinesRoute,
  postAccountsAccountIdPipelinesV1SinksRoute,
  postAccountsAccountIdPipelinesV1StreamsRoute,
  postAccountsAccountIdPipelinesV1ValidateSqlRoute,
  putAccountsAccountIdPipelinesPipelineNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudflarePipelinesOtherHandler = app
  .openapi(getAccountsAccountIdPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPipelinesV1PipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPipelinesV1PipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPipelinesV1PipelinesPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPipelinesV1PipelinesPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPipelinesV1PipelinesPipelineIdUpdateTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPipelinesV1SinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPipelinesV1SinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPipelinesV1SinksSinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPipelinesV1SinksSinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPipelinesV1SinksSinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPipelinesV1StreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPipelinesV1StreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPipelinesV1StreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPipelinesV1StreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPipelinesV1StreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPipelinesV1ValidateSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPipelinesPipelineNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPipelinesPipelineNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdPipelinesPipelineNameRoute, (c) => {
    throw new Error('Not implemented')
  })
