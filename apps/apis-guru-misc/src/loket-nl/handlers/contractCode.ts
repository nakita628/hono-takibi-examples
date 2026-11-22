import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersContractcodesContractCodeIdRoute,
  getProvidersEmployersContractcodesContractCodeIdRoute,
  getProvidersEmployersEmployerIdContractcodesRoute,
  postProvidersEmployersEmployerIdContractcodesRoute,
  putProvidersEmployersContractcodesContractCodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contractCodeHandler = app
  .openapi(deleteProvidersEmployersContractcodesContractCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersContractcodesContractCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersContractcodesContractCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdContractcodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdContractcodesRoute, (c) => {
    throw new Error('Not implemented')
  })
