import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContractsContractIdRoute,
  getContractsContractIdRoute,
  getContractsCountRoute,
  getContractsRoute,
  patchContractsContractIdRoute,
  postContractsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contractsContractHandler = app
  .openapi(getContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContractsContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContractsContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContractsContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContractsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
