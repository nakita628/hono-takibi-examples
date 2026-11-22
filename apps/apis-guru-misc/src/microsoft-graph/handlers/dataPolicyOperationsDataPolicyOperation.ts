import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataPolicyOperationsDataPolicyOperationIdRoute,
  getDataPolicyOperationsDataPolicyOperationIdRoute,
  getDataPolicyOperationsRoute,
  patchDataPolicyOperationsDataPolicyOperationIdRoute,
  postDataPolicyOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataPolicyOperationsDataPolicyOperationHandler = app
  .openapi(getDataPolicyOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataPolicyOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataPolicyOperationsDataPolicyOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataPolicyOperationsDataPolicyOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDataPolicyOperationsDataPolicyOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
