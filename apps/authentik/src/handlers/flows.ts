import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFlowsBindingsFsbUuidIndexRoute,
  deleteFlowsInstancesSlugIndexRoute,
  getFlowsBindingsFsbUuidIndexRoute,
  getFlowsBindingsFsbUuidUsedByIndexRoute,
  getFlowsBindingsIndexRoute,
  getFlowsExecutorFlowSlugIndexRoute,
  getFlowsInspectorFlowSlugIndexRoute,
  getFlowsInstancesCacheInfoIndexRoute,
  getFlowsInstancesIndexRoute,
  getFlowsInstancesSlugDiagramIndexRoute,
  getFlowsInstancesSlugExecuteIndexRoute,
  getFlowsInstancesSlugExportIndexRoute,
  getFlowsInstancesSlugIndexRoute,
  getFlowsInstancesSlugUsedByIndexRoute,
  patchFlowsBindingsFsbUuidIndexRoute,
  patchFlowsInstancesSlugIndexRoute,
  postFlowsBindingsIndexRoute,
  postFlowsExecutorFlowSlugIndexRoute,
  postFlowsInstancesCacheClearIndexRoute,
  postFlowsInstancesIndexRoute,
  putFlowsBindingsFsbUuidIndexRoute,
  putFlowsInstancesSlugIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flowsHandler = app
  .openapi(getFlowsBindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFlowsBindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsBindingsFsbUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFlowsBindingsFsbUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFlowsBindingsFsbUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFlowsBindingsFsbUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsBindingsFsbUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsExecutorFlowSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFlowsExecutorFlowSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsInspectorFlowSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsInstancesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFlowsInstancesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsInstancesSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFlowsInstancesSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFlowsInstancesSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFlowsInstancesSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsInstancesSlugDiagramIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsInstancesSlugExecuteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsInstancesSlugExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsInstancesSlugUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFlowsInstancesCacheClearIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsInstancesCacheInfoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
