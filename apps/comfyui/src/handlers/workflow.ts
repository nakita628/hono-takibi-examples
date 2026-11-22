import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDefaultWorkflowRoute,
  getApiGlobalSubgraphsIdRoute,
  getApiGlobalSubgraphsRoute,
  getApiHistoryV2PromptIdRoute,
  getApiHistoryV2Route,
  getApiJobsJobIdAssetsRoute,
  getApiJobsJobIdRoute,
  getApiJobsRoute,
  getApiPromptRoute,
  getApiWorkflowTemplatesRoute,
  postApiHistoryRoute,
  postApiJobsCancelRoute,
  postApiJobsJobIdCancelRoute,
  postApiPromptRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowHandler = app
  .openapi(getApiDefaultWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGlobalSubgraphsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGlobalSubgraphsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHistoryV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHistoryV2PromptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsJobIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPromptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPromptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorkflowTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
